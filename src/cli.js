#!/usr/bin/env node
const colors = require('colors/safe');
const argv = require('yargs').argv;
const proxyHandler = require('./handlers/proxyHandler');
if (argv.tool == "proxy"){
  if (argv.proxyNumber == null){
    console.log("\nYou need to specify the number of proxies please try:\n\n" + colors.green("crimson-tools --tool help \n\n"));
  }else{
    if (argv.country == null){
      proxyHandler.getProxy(argv.proxyNumber);
    }else{
      proxyHandler.getProxy(argv.proxyNumber, argv.country);
    }
  }
}else if (argv.tool == "help") {
  console.log(`\n ----------------------------------------------`);
  console.log(colors.red(` Crimson Tools`));
  console.log(` ----------------------------------------------`);
  console.log(colors.green(`\n  crimson-tools --tool type --optionalToolParameter optionalToolParameterValue`));
  console.log(`\n ----------------------------------------------`);
  console.log(colors.red(` Tool Types:`));
  console.log(` ----------------------------------------------`);
  console.log(`  --- `+colors.cyan(`help`)+` \n  --- `+colors.cyan(`proxy`));
  console.log(`  ------ `+colors.cyan(`proxyNumber`)+` = number of proxy to find eg: 5`);
  console.log(`  ------ `+colors.cyan(`country`)+` (optional) = two letter string eg: fr`);
  console.log(`\n ----------------------------------------------`);
  console.log(colors.red(` Command examples:`));
  console.log(` ----------------------------------------------`);
  console.log(colors.green(`  crimson-tools --tool help`));
  console.log(colors.green(`  crimson-tools --tool proxy --proxyNumber 5`));
  console.log(colors.green(`  crimson-tools --tool proxy --proxyNumber 5 --country fr`));
}
