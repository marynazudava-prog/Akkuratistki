/**
 * Main function to handle POST requests to the web app.
 * It retrieves the cached map layer payload, or builds it on first run.
 * @param {Object} e The request event object.
 * @return {GoogleAppsScript.Content.TextOutput} A JSON response.
 */
function doPost(e) {
  return doGet(e);
}

function doGet(e) {
  const payload = getMapLayerPayload_();
  const callback = e && e.parameter && e.parameter.callback;

  if (callback) {
    return createJsonpResponse_(callback, payload);
  }

  return createCorsJsonResponse_(payload, getCorsHeaders_());
}

function doOptions() {
  return createEmptyCorsResponse_(getCorsHeaders_());
}

function getMapLayerPayload_() {
  const speedStore = SpeedStore.getStore({
    store: PropertiesService.getScriptProperties(),
  });
  const cacheKey = 'mapLayerPayloadCache';
  const cachedPayload = speedStore.get(cacheKey);

  if (cachedPayload) {
    return cachedPayload;
  }

  const rawFeatures = getDataFromSheets();
  const payload = buildMapLayerPayload_(rawFeatures);
  speedStore.set(cacheKey, payload);
  return payload;
}

/**
 * Helper function to retrieve and structure data from Google Sheets.
 * This is a placeholder and needs to be tailored to the actual sheet structure.
 * It assumes each sheet represents a GeoJSON FeatureCollection.
 * @return {Object} A GeoJSON FeatureCollection object.
 */
function getDataFromSheets() {
  const spreadsheet = SpreadsheetApp.openById('1RawgvnlIF9ctItRJ88g87QrIpC9XGwNfb8qZToYwIvk');
  const sheetsToProcess = ['POSTCODES'];
  let allFeatures = [];

  sheetsToProcess.forEach(sheetName => {
    const sheet = spreadsheet.getSheetByName(sheetName);
    if (sheet) {
      const data = sheet.getDataRange().getValues();
      // Assuming first row is headers
      const headers = data.shift();

      const activeIndex = headers.indexOf('ACTIVE');
      const polygonGeometryIndex = headers.indexOf('polygon_geometry');

      data.forEach(row => {
        // Only process rows where 'ACTIVE' column is TRUE
        if (activeIndex > -1 && row[activeIndex] === true) {
          const properties = {};
          headers.forEach((header, index) => {
            // Exclude the geometry column from properties, it goes into geometry field
            if (header !== 'polygon_geometry') {
              properties[header] = row[index];
            }
          });

          // Parse polygon_geometry if it exists
          if (polygonGeometryIndex > -1 && row[polygonGeometryIndex]) {
            try {
              const geometry = JSON.parse(row[polygonGeometryIndex]);
              allFeatures.push({
                type: 'Feature',
                geometry: geometry,
                properties: properties
              });
            } catch (e) {
              console.log(`Error parsing GeoJSON for row: ${JSON.stringify(row)}. Error: ${e.message}`);
            }
          }
        }
      });
      } else {
      console.log(`Sheet '${sheetName}' not found.`);
      }
      });

  return {
    type: 'FeatureCollection',
    features: allFeatures
  };
}

function buildMapLayerPayload_(featureCollection) {
  const activeFeatures = (featureCollection.features || []).filter(feature => feature && feature.geometry);
  const zoneGroups = {};
  const postalCodes = new Set();

  activeFeatures.forEach(feature => {
    const zoneName = String(feature.properties && feature.properties.zone_name ? feature.properties.zone_name : '').trim();
    const postalCode = String(
      feature.properties && (feature.properties.SYMBOL || feature.properties.Name || '')
    ).trim();

    if (postalCode) {
      postalCodes.add(postalCode);
    }

    if (!zoneGroups[zoneName]) {
      zoneGroups[zoneName] = [];
    }
    zoneGroups[zoneName].push(feature);
  });

  const outlineFeature = buildHullFeature_(activeFeatures, {
    layer: 'outline',
    name: 'All service area',
  });

  const zoneFeatures = Object.entries(zoneGroups)
    .filter(([zoneName]) => zoneName)
    .map(([zoneName, features]) => buildHullFeature_(features, {
      layer: 'zone',
      name: zoneName,
      zone_name: zoneName,
      feature_count: features.length,
    }))
    .filter(Boolean);

  return {
    type: 'MapLayerPayload',
    generatedAt: new Date().toISOString(),
    postalCodes: Array.from(postalCodes).sort(),
    layers: {
      outline: {
        type: 'FeatureCollection',
        features: outlineFeature ? [outlineFeature] : []
      },
      zones: {
        type: 'FeatureCollection',
        features: zoneFeatures
      }
    }
  };
}

function buildHullFeature_(features, properties) {
  const points = collectOuterRingPoints_(features);
  const hullRing = computeConvexHullRing_(points);

  if (!hullRing) {
    return null;
  }

  return {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [hullRing]
    },
    properties: properties
  };
}

function collectOuterRingPoints_(features) {
  const points = [];

  features.forEach(feature => {
    const geometry = feature && feature.geometry;
    if (!geometry || !geometry.type || !geometry.coordinates) {
      return;
    }

    if (geometry.type === 'Polygon') {
      const outerRing = geometry.coordinates[0] || [];
      outerRing.forEach(point => {
        if (Array.isArray(point) && point.length >= 2) {
          points.push([Number(point[0]), Number(point[1])]);
        }
      });
      return;
    }

    if (geometry.type === 'MultiPolygon') {
      geometry.coordinates.forEach(polygon => {
        const outerRing = polygon[0] || [];
        outerRing.forEach(point => {
          if (Array.isArray(point) && point.length >= 2) {
            points.push([Number(point[0]), Number(point[1])]);
          }
        });
      });
    }
  });

  return points.filter(point => Number.isFinite(point[0]) && Number.isFinite(point[1]));
}

function computeConvexHullRing_(points) {
  if (!points || points.length < 3) {
    return null;
  }

  const uniquePoints = Array.from(
    new Map(points.map(point => [`${point[0]},${point[1]}`, point])).values()
  );

  if (uniquePoints.length < 3) {
    return null;
  }

  uniquePoints.sort((left, right) => left[0] === right[0] ? left[1] - right[1] : left[0] - right[0]);

  const cross = (origin, left, right) => (
    (left[0] - origin[0]) * (right[1] - origin[1]) -
    (left[1] - origin[1]) * (right[0] - origin[0])
  );

  const lower = [];
  for (const point of uniquePoints) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) {
      lower.pop();
    }
    lower.push(point);
  }

  const upper = [];
  for (let index = uniquePoints.length - 1; index >= 0; index -= 1) {
    const point = uniquePoints[index];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) {
      upper.pop();
    }
    upper.push(point);
  }

  lower.pop();
  upper.pop();

  const hull = lower.concat(upper);

  if (hull.length < 3) {
    return null;
  }

  const ring = hull.map(point => [point[0], point[1]]);
  ring.push([hull[0][0], hull[0][1]]);
  return ring;
}

function getCorsHeaders_() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function applyCorsHeaders_(output, headers) {
  if (output && typeof output.setHeaders === "function") {
    output.setHeaders(headers);
  }
  return output;
}

function createCorsJsonResponse_(payload, headers) {
  const output = ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
  return applyCorsHeaders_(output, headers);
}

function createEmptyCorsResponse_(headers) {
  const output = ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON);
  return applyCorsHeaders_(output, headers);
}

function createJsonpResponse_(callback, payload) {
  const safeCallback = String(callback || "").replace(/[^\w$.]/g, "");
  const script = `${safeCallback}(${JSON.stringify(payload)});`;
  return ContentService.createTextOutput(script)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}
