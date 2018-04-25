#!/usr/bin/env node
const argv = require('yargs').argv;
if (argv.tool == "proxy"){
  if (argv.number == null){
    console.log("\nYou need to specify the number of proxies please try:\n\ncrimson-tools --tool help \n\n")
  }
}
console.log(argv.test);
