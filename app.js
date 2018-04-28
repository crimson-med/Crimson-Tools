const axios = require("axios");
const fs = require("fs");
const colors = require("colors/safe");
const proxyHandler = require("./src/handlers/proxyHandler");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports = {

  getProxies: async function(proxyNumber, country, logged = true){
    // Wrapper function to easily require in project
        const result = await proxyHandler.getProxies(proxyNumber, country, logged);
        return result;
  }
};
