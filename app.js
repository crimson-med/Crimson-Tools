const axios = require('axios');
const fs = require('fs');
const colors = require('colors/safe');
const proxyHandler = require('./src/handlers/proxyHandler');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
  getProxy: function(proxyNumber, country){
    proxyHandler.getProxy(proxyNumber, country);
  }
}
