const axios = require('axios');

module.exports = {

  //Main background download function
  main: function(country) {
    const url_toget = `https://gimmeproxy.com/api/getProxy?country=${country}&maxCheckPeriod=3600&protocol=http`;
    const url_toget2 = `https://pubproxy.com/api/proxy?country=${country}&last_check=3600&type=http`;
    // Make a request for a user with a given ID
    axios.get(url_toget)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
