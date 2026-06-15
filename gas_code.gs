/**
 * Main function to handle POST requests to the web app.
 * Routes to appropriate data based on query parameters.
 * @param {Object} e The request event object.
 * @return {GoogleAppsScript.Content.TextOutput} A JSON response.
 */
function doPost(e) {
  return doGet(e);
}

function doGet(e) {
  const sheet = e && e.parameter && e.parameter.sheet;
  const callback = e && e.parameter && e.parameter.callback;

  let payload;

  if (sheet === 'PRICES') {
    payload = getPricesData_();
  } else if (sheet === 'POSTCODES') {
    // POSTCODES endpoint returns map layer data for backward compatibility with existing map implementation
    payload = getMapLayerPayload_();
  } else if (sheet === 'METADATA') {
    payload = getMetadata_();
  } else if (!sheet) {
    // Default (no parameters): return comprehensive website data
    // Contains: map layers, prices, postcodes with delivery costs, and metadata
    payload = getCombinedDataPayload_();
  } else {
    // Unknown sheet parameter: return error
    payload = { error: `Unknown sheet: ${sheet}`, type: 'ErrorPayload' };
  }

  if (callback) {
    return createJsonpResponse_(callback, payload);
  }

  return createCorsJsonResponse_(payload, getCorsHeaders_());
}

function doOptions() {
  return createEmptyCorsResponse_(getCorsHeaders_());
}

/**
 * Retrieve metadata (room types, equipment lists, etc.) from spreadsheet.
 * @return {Object} A metadata payload object.
 */
function getMetadata_() {
  const speedStore = SpeedStore.getStore({
    store: PropertiesService.getScriptProperties(),
  });
  const cacheKey = 'metadataCache';
  const cachedPayload = speedStore.get(cacheKey);

  // Bypass cache if metadata is empty
  if (cachedPayload && cachedPayload.metadata && Object.keys(cachedPayload.metadata).length > 0) {
    return cachedPayload;
  }

  const metadata = {
    roomTypes: [
      { value: 'Kitchen', label: 'Kitchen', equipment: ['Fridge', 'Dishwasher', 'Microwave Oven', 'Oven', 'Gas Cooker', 'IH Cooker', 'Freezer'] },
      { value: 'Living Room', label: 'Living Room', equipment: ['TV Stand', 'Shelves', 'Coffee Table', 'Bookshelves'] },
      { value: 'Bedroom', label: 'Bedroom', equipment: ['Wardrobe', 'Nightstands', 'Dresser', 'Mirror'] },
      { value: 'Bathroom', label: 'Bathroom', equipment: ['Toilet Bowl', 'Sink', 'Mirror', 'Shower Cabin', 'Bath Tub'] },
      { value: 'Office', label: 'Office/Study', equipment: ['Desk', 'Office Chair', 'Shelves', 'Cabinet'] },
      { value: 'Hallway', label: 'Hallway/Entrance', equipment: ['Shoe Cabinet', 'Coat Rack', 'Mirror'] },
      { value: 'Terrace', label: 'Terrace/Balcony', equipment: ['Outdoor Furniture', 'Railing'] },
      { value: 'Indoor Garden', label: 'Indoor Garden', equipment: ['Plant Shelves', 'Garden Tools'] },
      { value: 'Storage', label: 'Storage/Pantry', equipment: ['Shelves', 'Cabinets'] },
      { value: 'Other', label: 'Other Area', equipment: [] }
    ],
    windowSizes: ['Large', 'Standard', 'Small', 'Balcony'],
    windowMaterials: ['Plastic', 'Wood', 'Metal'],
    furnitureTypes: ['Armchair', 'Sofa 1-seater', 'Sofa 2-seater', 'Sofa 3-seater', 'Sofa 4-seater', 'Sofa 5-seater', 'Sofa 6-seater', 'Ottoman', 'Chaise Lounge', 'Pouf'],
    furnitureMaterials: ['Natural Fabric', 'Smooth Fabric', 'Rough Fabric'],
    dirtinessLevels: ['Refresh', 'Few Spots', 'Dirty'],
    mattressSizes: ['Single', 'Twin', 'Full', 'Double', 'Queen', 'King', 'California King', 'Custom'],
    carpetMaterials: ['Natural Fiber', 'Synthetic'],
    furnitureMaterialMultipliers: { 'Natural Fabric': 1.0, 'Smooth Fabric': 1.0, 'Rough Fabric': 1.2 },
    carpetMaterialMultipliers: { 'Natural Fiber': 1.2, 'Synthetic': 1.0 },
    dirtinessMultipliers: { 'Refresh': 1.0, 'Few Spots': 1.5, 'Dirty': 2.0 },
    additionalServices: ['Ironing', 'Dishwashing', 'Laundry', 'Space Organization']
  };

  const payload = {
    type: 'MetadataPayload',
    generatedAt: new Date().toISOString(),
    metadata: metadata
  };

  speedStore.set(cacheKey, payload);
  return payload;
}

/**
 * Retrieve pricing data from PRICES sheet.
 * Returns structured pricing organized by category.
 * @return {Object} A pricing payload object.
 */
function getPricesData_() {
  const speedStore = SpeedStore.getStore({
    store: PropertiesService.getScriptProperties(),
  });
  const cacheKey = 'pricesDataCache';
  const cachedPayload = speedStore.get(cacheKey);

  if (cachedPayload) {
    return cachedPayload;
  }

  const spreadsheet = SpreadsheetApp.openById('1RawgvnlIF9ctItRJ88g87QrIpC9XGwNfb8qZToYwIvk');
  const sheet = spreadsheet.getSheetByName('PRICES');

  if (!sheet) {
    return { error: 'PRICES sheet not found', type: 'PriceListPayload' };
  }

  const data = sheet.getDataRange().getValues();
  const headers = data.shift(); // Remove header row

  const pricesByCategory = {};

  data.forEach(row => {
    const category = String(row[0] || '').trim();
    const description = String(row[1] || '').trim();
    const pricePerItem = row[2] !== '' ? Number(row[2]) : null;
    const pricePerSqm = row[3] !== '' ? Number(row[3]) : null;
    const pricePerHour = row[4] !== '' ? Number(row[4]) : null;

    // Skip empty rows
    if (category && description) {
      if (!pricesByCategory[category]) {
        pricesByCategory[category] = [];
      }

      pricesByCategory[category].push({
        description: description,
        pricePerItem: pricePerItem,
        pricePerSqm: pricePerSqm,
        pricePerHour: pricePerHour
      });
    }
  });

  const payload = {
    type: 'PriceListPayload',
    generatedAt: new Date().toISOString(),
    prices: pricesByCategory
  };

  speedStore.set(cacheKey, payload);
  return payload;
}

/**
 * Retrieve comprehensive website data payload (default endpoint).
 * This is the ONLY endpoint the website needs to call.
 * Contains: map layers (for map), prices (for estimate form), postcodes with delivery costs (for estimate form), and metadata.
 * @return {Object} A comprehensive payload containing all website data.
 */
function getCombinedDataPayload_() {
  const speedStore = SpeedStore.getStore({
    store: PropertiesService.getScriptProperties(),
  });
  const cacheKey = 'comprehensiveWebsiteDataCache';
  const cachedPayload = speedStore.get(cacheKey);

  // Bypass cache if metadata is missing or empty
  if (cachedPayload && cachedPayload.metadata && Object.keys(cachedPayload.metadata).length > 0) {
    return cachedPayload;
  }

  const mapLayerPayload = getMapLayerPayload_();
  const pricesData = getPricesData_();
  const postcodesData = getPostcodesData_();
  const metadata = getMetadata_();

  const payload = {
    type: 'ComprehensiveWebsitePayload',
    generatedAt: new Date().toISOString(),
    mapLayers: mapLayerPayload.layers || {},
    postalCodes: mapLayerPayload.postalCodes || [],
    prices: pricesData.prices || {},
    postcodes: postcodesData.postcodes || [],
    metadata: metadata.metadata || {}
  };

  speedStore.set(cacheKey, payload);
  return payload;
}

/**
 * Retrieve postal code data (simplified for delivery cost lookup).
 * Returns postal codes with delivery costs and zones, without heavy geometry.
 * @return {Object} A postcodes payload object.
 */
function getPostcodesData_() {
  const speedStore = SpeedStore.getStore({
    store: PropertiesService.getScriptProperties(),
  });
  const cacheKey = 'postcodesDataCache';
  const cachedPayload = speedStore.get(cacheKey);

  if (cachedPayload) {
    return cachedPayload;
  }

  const spreadsheet = SpreadsheetApp.openById('1RawgvnlIF9ctItRJ88g87QrIpC9XGwNfb8qZToYwIvk');
  const sheet = spreadsheet.getSheetByName('POSTCODES');

  if (!sheet) {
    return { error: 'POSTCODES sheet not found', type: 'PostcodesPayload' };
  }

  const data = sheet.getDataRange().getValues();
  const headers = data.shift(); // Remove header row

  // Map header names to indices
  const headerMap = {};
  headers.forEach((header, index) => {
    headerMap[header] = index;
  });

  const postcodesArray = [];
  const uniquePostcodes = new Set();

  data.forEach(row => {
    // Only process rows where 'ACTIVE' is TRUE
    if (headerMap['ACTIVE'] !== undefined && row[headerMap['ACTIVE']] === true) {
      const symbol = String(row[headerMap['SYMBOL']] || '').trim();
      const zoneName = String(row[headerMap['zone_name']] || '').trim();
      const deliveryCost = row[headerMap['delivery_cost']] !== '' ? Number(row[headerMap['delivery_cost']]) : null;
      const deliveryDistance = row[headerMap['delivery_distance']] !== '' ? Number(row[headerMap['delivery_distance']]) : null;

      if (symbol && !uniquePostcodes.has(symbol)) {
        uniquePostcodes.add(symbol);
        postcodesArray.push({
          postalCode: symbol,
          zoneName: zoneName,
          deliveryCost: deliveryCost,
          deliveryDistance: deliveryDistance
        });
      }
    }
  });

  const payload = {
    type: 'PostcodesPayload',
    generatedAt: new Date().toISOString(),
    postcodes: postcodesArray.sort((a, b) => a.postalCode.localeCompare(b.postalCode))
  };

  speedStore.set(cacheKey, payload);
  return payload;
}

/**
 * Original map layer payload function (backward compatible).
 * Retrieves and structures data from Google Sheets for map visualization.
 */
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