import fs from "fs";
import path from "path";
import { createController, createEntity, createModel, createService } from "./filesCreator";
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
  "repositories"
];

export default function createFoldersForModule (dirname: string, module: string) {
  const arch = getArch();

  if (arch === "clean") {
    for (const folder of cleanFolders) {
      folderCreator(path.join(dirname, folder));
    }

    createController(path.join(dirname, "controllers"), getLang(), module);
    createModel(path.join(dirname, "models"), getLang(), module);
    createEntity(path.join(dirname, "interfaces"), getLang(), module);
    createService(path.join(dirname, "services"), getLang(), module);
  }
}
