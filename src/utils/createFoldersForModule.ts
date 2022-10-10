import fs from "fs";
import path from "path";
import {
  createController,
  createEntity,
  createModel,
  createSchema,
  createService,
  createTest
} from "./filesCreator";
import { getArch, getLang } from "./gettersFromConfigFile";

function folderCreator (localPath: string) {
  return !fs.existsSync(localPath) && fs.mkdirSync(localPath);
}

const cleanFolders = [
  "models",
  "controllers",
  "services",
  "validations",
  "utilities",
  "interfaces",
  "repositories",
  "tests"
];

export default function createFoldersForModule (dirname: string, module: string) {
  const arch = getArch();

  if (arch === "clean") {
    try {
      for (const folder of cleanFolders) {
        folderCreator(path.join(dirname, folder));
      }

      createTest(path.join(dirname, "tests"), getLang(), module);
      createModel(path.join(dirname, "models"), getLang(), module);
      createService(path.join(dirname, "services"), getLang(), module);
      createEntity(path.join(dirname, "interfaces"), getLang(), module);
      createSchema(path.join(dirname, "validations"), getLang(), module);
      createController(path.join(dirname, "controllers"), getLang(), module);
    } catch (error) {
      console.log("Error creating folders for module: ", module);
    }
  }
}
