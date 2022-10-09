#!/bsn/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import promptInitialConfig, { defaultConfig } from "./actions/init";
import proptCreateAllModules from "./actions/create";
import proptAgregateNewModule from "./actions/add";
import createInitialFile from "./utils/createInitialFile";
import { setNewModuleInConfigFile } from "./utils/setNewModuleInConfigFile";

yargs(hideBin(process.argv))
  .command("init", "Start new devy project", _ => {}, (argv) => {
    if (argv.yes) {
      createInitialFile(defaultConfig.type, defaultConfig.arch, defaultConfig.lang);
    } else {
      promptInitialConfig().then((config) => {
        createInitialFile(config.type, config.arch, config.lang);
      });
    }
  })
  .option("yes", {
    alias: "y",
    type: "boolean",
    description: "Create a project with default settings"
  })
  .argv;

yargs(hideBin(process.argv))
  .command("create", "Add a new feature to your project", _ => {}, () => {
    proptCreateAllModules();
  }).argv;

yargs(hideBin(process.argv))
  .command("add", "Add a new feature to your project", _ => {}, () => {
    proptAgregateNewModule().then((name) => {
      setNewModuleInConfigFile(name);
      proptCreateAllModules();
    });
  }).argv;
