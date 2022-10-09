#!/usr/bin/env node

import promptInitialConfig, { defaultConfig } from "./actions/init";
import proptCreateAllModules from "./actions/create";
import proptAgregateNewModule from "./actions/add";
import createInitialFile from "./utils/createInitialFile";
import { setNewModuleInConfigFile } from "./utils/setNewModuleInConfigFile";
import { Command } from "commander";

function main (): void {
  console.log(process.cwd());
  const program = new Command();

  program
    .name("devyc")
    .description("CLI to some JavaScript string utilities")
    .version("0.8.0");

  program
    .command("init")
    .description("Start new devy project")
    .option("-y, --yes", "Init project with defaults configurations (CLI mode only)", false)
    .action((cmdObj) => {
      if (cmdObj.yes) {
        createInitialFile(defaultConfig.type, defaultConfig.arch, defaultConfig.lang);
      } else {
        promptInitialConfig().then((config) => {
          createInitialFile(config.type, config.arch, config.lang);
        });
      }
    });

  program
    .command("create")
    .description("Add a new feature to your project")
    .action(() => {
      proptCreateAllModules();
    });

  program
    .command("add")
    .description("Add a new feature to your project")
    .action(() => {
      proptAgregateNewModule().then((name) => {
        setNewModuleInConfigFile(name);
        proptCreateAllModules();
      });
    });

  program.parse(process.argv);
}

main();
