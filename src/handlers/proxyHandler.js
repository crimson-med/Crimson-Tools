const axios = require('axios');
const fs = require('fs');
const colors = require('colors/safe');
const loggerHandler = require('./loggerHandler.js')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
  //Main background download function
  getProxy: async function(proxyNumber, country, logged = true) {
    let countryParameter = '';
    let outputText = '\n All '+colors.green(proxyNumber)+' proxies where saved in '+colors.green('crimsonList.txt\n');
    if (country !== undefined){
      countryParameter = `country=${country}&`;
      outputText = '\n All '+colors.green(proxyNumber)+' proxies from '+colors.green(country)+' where saved in '+colors.green('crimsonList.txt\n');
    }
    let proxies = [
      `https://gimmeproxy.com/api/getProxy?${countryParameter}maxCheckPeriod=3600&protocol=http`,
      `https://pubproxy.com/api/proxy?${countryParameter}last_check=3600&type=http`,
      `https://api.getproxylist.com/proxy?${countryParameter}`
    ]
    let results = [];
    //http://www.thebigproxylist.com/members/proxy-api.php?output=all&user=list&pass=8a544b2637e7a45d1536e34680e11adf
    while(results.length < proxyNumber){
      const url_toget = proxies[Math.floor(Math.random() * (proxies.length))];
      try {
        const receivedProxy = await getProxy(url_toget);
        if (logged){
          const test = await loggerHandler.renderProgressBar(results.length+1, proxyNumber);
        }
        results.push(receivedProxy);
      } catch (e) {
      }
    }
    //console.log("\nFinished getting all proxies\n");
    var stream = fs.createWriteStream("crimsonList.txt");
    stream.once('open', function(fd) {
      for (var i = 0; i < results.length; i++) {
        stream.write(`${results[i].ip}:${results[i].port}\n`);
      }
      stream.end();
      if (logged){
        console.log(outputText);
      }
    });
    return results;
  },
}
async function getProxy(url){
  return new Promise((resolve, reject) => {
    axios.get(url).then(function (response) {
      let proxy = {};
      if (url.includes("pubproxy")){
        const ltemp = Object.values(response.data)[0][0];
        proxy = {
          ip: ltemp.ip,
          port: ltemp.port
        };
      }else {
        proxy = {
          ip: response.data.ip,
          port: response.data.port
        };
      }
      resolve(proxy);
    }).catch(function (error) {
      reject(error);
    });
  });
}
