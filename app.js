const axios = require("axios");
const fs = require("fs");
const colors = require("colors/safe");
const proxyHandler = require("./src/handlers/proxyHandler");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
  // Wrapper function to easily require in project
  getProxies: async function(proxyNumber, country, logged = true){
    // Call the real function
    const result = await proxyHandler.getProxies(proxyNumber, country, logged);
    // Pass the result
    return result;
  }
}
