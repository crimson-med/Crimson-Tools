#!/usr/bin/env node
const colors = require("colors/safe");
const argv = require("yargs").argv;
const proxyHandler = require("./handlers/proxyHandler");
if (argv.tool === "proxy"){
  if (argv.proxyNumber === null){
    Console.log("\nYou need to specify the number of proxies please try:\n\n" + colors.green("crimson-tools --tool help \n\n"));
  }else{
    if (argv.country === null){
      proxyHandler.getProxies(argv.proxyNumber);
    }else{
      proxyHandler.getProxies(argv.proxyNumber, argv.country);
    }
  }
}else if (argv.tool === "help") {
  Console.log("\n ----------------------------------------------");
  Console.log(colors.red(" Crimson Tools"));
  Console.log(" ----------------------------------------------");
  Console.log(colors.green("\n  crimson-tools --tool type --optionalToolParameter optionalToolParameterValue"));
  Console.log("\n ----------------------------------------------");
  Console.log(colors.red(" Tool Types:"));
  Console.log(" ----------------------------------------------");
  Console.log("  --- "+colors.cyan("help")+" \n  --- "+colors.cyan("proxy"));
  Console.log("  ------ "+colors.cyan("proxyNumber")+" = number of proxy to find eg: 5");
  Console.log("  ------ "+colors.cyan("country")+" (optional) = two letter string eg: fr");
  Console.log("\n ----------------------------------------------");
  Console.log(colors.red(" Command examples:"));
  Console.log(" ----------------------------------------------");
  Console.log(colors.green("  crimson-tools --tool help"));
  Console.log(colors.green("  crimson-tools --tool proxy --proxyNumber 5"));
  Console.log(colors.green("  crimson-tools --tool proxy --proxyNumber 5 --country fr"));
}
