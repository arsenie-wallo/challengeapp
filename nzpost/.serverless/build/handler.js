"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// handler.ts
var handler_exports = {};
__export(handler_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(handler_exports);
var NZPostAPI = class {
  constructor(clientId, authToken, userName) {
    this.clientId = clientId;
    this.authToken = authToken;
    this.userName = userName;
    this.baseUrl = "https://api.nzpost.co.nz/addresschecker/1.0";
    this.headers = new Headers();
    this.setHeaders();
  }
  setHeaders() {
    this.headers.append("client_id", this.clientId);
    this.headers.append("Authorization", `Bearer ${this.authToken}`);
    this.headers.append("Accept", "application/json");
    this.headers.append("user_name", this.userName);
  }
  async suggestPartial(query) {
    const url = `${this.baseUrl}/suggest_partial?q=${encodeURIComponent(query)}`;
    const init = {
      method: "GET",
      headers: this.headers
    };
    const response = await fetch(url, init);
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  }
};
var handler = async (event) => {
  const query = event.queryStringParameters?.q || "willis";
  const api = new NZPostAPI(
    "89aa47b00c2f49bf807fc23624a1ddb2",
    "eyJhbGciOiJIUzI1NiIsImtpZCI6IlRFU1QiLCJwaS5hdG0iOiIxIn0.eyJzY29wZSI6W10sImF1dGhvcml6YXRpb25fZGV0YWlscyI6W10sImNsaWVudF9pZCI6Ijg5YWE0N2IwMGMyZjQ5YmY4MDdmYzIzNjI0YTFkZGIyIiwiZXhwIjoxNzQ1ODIxNzk1fQ.xNoD9b3t7DwPIPXYjb52EDvzCPAnJPe6eoIKTsDQMP0",
    "it@wallopay.com"
  );
  try {
    const result = await api.suggestPartial(query);
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong", detail: err })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=handler.js.map
