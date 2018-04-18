#!/usr/bin/env node
import { alias, argv, defaults, demandOption, describe, epilog, usage } from "yargs";
import * as logger from "winston";
//import { AccountsGenerator } from "./modules/AccountsGenerator";

export default class CommandLine {

  public static start() {
    logger.configure({
      emitErrs: true,
      exitOnError: false,
      transports: [
        new logger.transports.Console({
          colorize: true,
          handleExceptions: true,
          json: false,
          level: "debug",
          timestamp: true,
        }),
      ],
    });

    usage("Usage: $0 --out [filePath] --proxy [filePath] --total [num]");
    demandOption(["out"]);
    defaults({ total: 1 });
    alias("out", "o");
    alias("proxy", "p");
    alias("total", "t");
    describe("out", "File to append accounts");
    describe("proxy", "Proxy list (otherwise proxies will be generated but take longer)");
    describe("total", "Number of proxies to be gathered");
    epilog("Copyright © 2018 []");

    process.on("unhandledRejection", (reason) => {
      logger.error("Process", reason);
    });

    const start = async () => {
      const config: AnkartonConfig = new AnkartonConfig({
        logger,
        output: argv.out,
        total: argv.total,
      });
      if (argv.proxy) {
        config.proxyPath = argv.proxy;
      }
      await AccountsGenerator.generate(config);
      config.logger.info("All accounts were added successfully!");
      process.exit();
    };

    return start();
  }
}

CommandLine.start();
