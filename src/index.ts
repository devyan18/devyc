#!/usr/bin/env node

import fs from "fs";
import promptInitialConfig, { defaultConfig } from "./actions/init";
import proptCreateAllModules from "./actions/create";
import proptAgregateNewModule from "./actions/add";
import createInitialFile from "./utils/createInitialFile";
import { setNewModuleInConfigFile } from "./utils/setNewModuleInConfigFile";
import { Command } from "commander";

function main (): void {
  const program = new Command();

  program
    .name("devyc")
    .description("CLI to some JavaScript and Typescript projects")
    .version("0.0.1");

  program
    .option("-v", "Display the program version")
    .action(() => {
      const file = JSON.parse(fs.readFileSync("package.json", "utf8"));
      console.log("✅", file.version);
    });

  program
    .command("init")
    .description("Start new project")
    .option("-y, --yes", "Init project with defaults configurations (CLI mode only)", false)
    .action((cmdObj) => {
      console.log("⚙️  devyc is running...\n");
      if (cmdObj.yes) {
        createInitialFile(
          defaultConfig.framework,
          defaultConfig.arch,
          defaultConfig.lang,
          defaultConfig.pattern,
          defaultConfig.modules
        );
      } else {
        promptInitialConfig().then((config) => {
          createInitialFile(config.framework, config.arch, config.lang, config.pattern, config.modules);
        });
      }
    });

  program
    .command("create")
    .description("Create new module(s)")
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
