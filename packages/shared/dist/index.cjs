'use strict';

// src/api.ts
var CAT_API_URL = "https://api.thecatapi.com/v1/images/search";
async function fetchCatImage(apiKey) {
  if (typeof fetch === "undefined") {
    return {
      data: null,
      error: new Error("fetch is not available in this environment"),
      loading: false
    };
  }
  try {
    const headers = {};
    if (apiKey) {
      headers["x-api-key"] = apiKey;
    }
    const response = await fetch(CAT_API_URL, {
      method: "GET",
      headers
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data || !Array.isArray(data) || data.length === 0) {
      throw new Error("No cat image data received from API");
    }
    const catData = data[0];
    if (!catData.url || !catData.id) {
      throw new Error("Invalid cat image data received");
    }
    return {
      data: catData,
      error: null,
      loading: false
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error : new Error("Unknown error occurred"),
      loading: false
    };
  }
}

// src/utils.ts
function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function isClient() {
  return typeof process === "undefined" || process.client === true;
}
function normalizeDimension(value) {
  if (value === void 0) return "auto";
  if (typeof value === "number") return `${value}px`;
  return value;
}
function generateId(prefix = "caac") {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
function getEnvVar(envKey) {
  if (typeof process !== "undefined" && process.env) {
    return process.env[envKey];
  }
  return void 0;
}
function debounce(func, delay) {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

exports.debounce = debounce;
exports.fetchCatImage = fetchCatImage;
exports.generateId = generateId;
exports.getEnvVar = getEnvVar;
exports.isBrowser = isBrowser;
exports.isClient = isClient;
exports.normalizeDimension = normalizeDimension;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map