const http = require("http");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { URL } = require("url");

const projectRoot = path.resolve(__dirname, "..");
const editorPath = path.join(__dirname, "index.html");
const scriptsPath = path.join(projectRoot, "website", "scripts.js");
const port = Number(process.env.TRANSLATION_EDITOR_PORT || 8787);

function readTranslationsFile() {
  return fs.readFileSync(scriptsPath, "utf8");
}

function extractTranslations(source) {
  const match = source.match(/\/\/ TRANSLATIONS_START\s*\n([\s\S]*?)\n\/\/ TRANSLATIONS_END/);
  if (!match) {
    throw new Error("Unable to locate translation block in website/scripts.js");
  }

  const block = match[1].replace(/^const TRANSLATIONS =\s*/, "").replace(/;\s*$/, "");
  return vm.runInNewContext(`(${block})`);
}

function buildTranslationOrder(translations) {
  return Object.keys(translations.en || {});
}

function normalizeTranslations(translations, keyOrder) {
  const languageCodes = ["en", "pl", "ru"];

  return languageCodes.reduce((accumulator, languageCode) => {
    const currentLanguage = translations[languageCode] || {};
    const ordered = {};

    keyOrder.forEach(key => {
      ordered[key] = currentLanguage[key] ?? "";
    });

    Object.keys(currentLanguage).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(ordered, key)) {
        ordered[key] = currentLanguage[key];
      }
    });

    accumulator[languageCode] = ordered;
    return accumulator;
  }, {});
}

function rewriteTranslationsFile(nextTranslations) {
  const source = readTranslationsFile();
  const currentTranslations = extractTranslations(source);
  const keyOrder = buildTranslationOrder(currentTranslations);
  const normalized = normalizeTranslations(nextTranslations, keyOrder);
  const updatedBlock = `// TRANSLATIONS_START\nconst TRANSLATIONS = ${JSON.stringify(normalized, null, 2)};\n// TRANSLATIONS_END`;
  const updatedSource = source.replace(/\/\/ TRANSLATIONS_START\s*\n[\s\S]*?\n\/\/ TRANSLATIONS_END/, updatedBlock);
  fs.writeFileSync(scriptsPath, updatedSource, "utf8");
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function sendHtml(response, html) {
  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(html);
}

function sendText(response, statusCode, body) {
  response.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(body);
}

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host || "localhost"}`);

  if (request.method === "GET" && requestUrl.pathname === "/") {
    sendHtml(response, fs.readFileSync(editorPath, "utf8"));
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/translations") {
    try {
      const source = readTranslationsFile();
      const translations = extractTranslations(source);
      sendJson(response, 200, {
        languages: ["en", "pl", "ru"],
        keyOrder: buildTranslationOrder(translations),
        translations,
      });
    } catch (error) {
      sendJson(response, 500, { error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/translations") {
    let body = "";
    request.setEncoding("utf8");
    request.on("data", chunk => {
      body += chunk;
      if (body.length > 10_000_000) {
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        const payload = JSON.parse(body || "{}");
        if (!payload.translations || typeof payload.translations !== "object") {
          throw new Error("Missing translations payload");
        }

        rewriteTranslationsFile(payload.translations);
        sendJson(response, 200, { ok: true });
      } catch (error) {
        sendJson(response, 400, { ok: false, error: error.message });
      }
    });
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/health") {
    sendText(response, 200, "ok");
    return;
  }

  sendText(response, 404, "Not found");
});

server.listen(port, () => {
  console.log(`Translation editor running at http://localhost:${port}`);
});
