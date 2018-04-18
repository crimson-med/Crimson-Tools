const axios = require('axios');
const fs = require('fs');
const colors = require('colors/safe');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {

  //Main background download function
  getProxy: async function(country, proxyNumber) {
    let proxies = [
      `https://gimmeproxy.com/api/getProxy?country=${country}&maxCheckPeriod=3600&protocol=http`,
      `https://pubproxy.com/api/proxy?country=${country}&last_check=3600&type=http`,
      'https://api.getproxylist.com/proxy?country=fr'
    ]
    let results = [];
    //http://www.thebigproxylist.com/members/proxy-api.php?output=all&user=list&pass=8a544b2637e7a45d1536e34680e11adf
    while(results.length < proxyNumber){

      const url_toget = proxies[Math.floor(Math.random() * (proxies.length))];
      try {
        const receivedProxy = await getProxy(url_toget);
        const test = await logProgress(results.length+1, proxyNumber);
        results.push(receivedProxy);
      } catch (e) {
      }

      //console.log(receivedProxy);

    }
    console.log("\nFinished getting all proxies\n");
    var stream = fs.createWriteStream("crimsonList.txt");
    stream.once('open', function(fd) {
      for (var i = 0; i < results.length; i++) {
        stream.write(`${results[i].ip}:${results[i].port}\n`);
      }
      stream.end();
      console.log('All '+colors.green(proxyNumber)+' proxies where saved in '+colors.green('crimsonList.txt'));
    });

    // Make a request for a user with a given ID

  },

  test:function(){
    var yargs = require('yargs')

    // pass fake CLI args when calling yargs as a function
    var argv = yargs('--foo wut')
      .option('foo', {
        type: 'string',
        default: 'bar'
      })
      .argv

    console.log(argv)

  }
}
async function logProgress(currentValue, totalValue){
  process.stdout.clearLine();  // clear current text
  process.stdout.cursorTo(0);  // move cursor to beginning of line
  var percent = ((currentValue)/totalValue*50).toFixed(2) ;
  var progressFirst = "";
  var progressLast = "";
  for (var j = 0; j < 50; j++) {
    if (j <= percent) {
      progressFirst = progressFirst + "=";
    }else{
      progressLast = progressLast + "-";
    }
  }
  progress = "[" + colors.green(progressFirst) + colors.yellow(progressLast)+"]";
  process.stdout.write(progress + "   proxy "+(currentValue)+"/"+totalValue);
  return "written";
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
