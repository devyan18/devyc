import fs from "fs";
import path from "path";
import createFoldersForModule from "../utils/createFoldersForModule";
import { createSettings } from "../utils/filesCreator";
import { getLang, getModules, getRootDir } from "../utils/gettersFromConfigFile";

export default async function proptCreateAllModules () {
  const localPath = getRootDir();

  fs.existsSync(localPath) || fs.mkdirSync(localPath);

  const routesPath = path.join(localPath, "routes");
  const settingsPath = path.join(localPath, "settings");
  const helpersPath = path.join(localPath, "helpers");

  if (getLang()) {
    fs.existsSync(path.join(localPath, "index.ts")) || fs.writeFileSync(path.join(localPath, "index.ts"), "// Code Typescript Here\n");
  } else {
    fs.existsSync(path.join(localPath, "index.js")) || fs.writeFileSync(path.join(localPath, "index.js"), "// Code Javascript Here\n");
  }

  fs.existsSync(routesPath) || fs.mkdirSync(routesPath);
  fs.existsSync(settingsPath) || fs.mkdirSync(settingsPath);

  createSettings(settingsPath, getLang());

  fs.existsSync(helpersPath) || fs.mkdirSync(helpersPath);

  if (getLang()) {
    fs.existsSync(path.join(helpersPath, "sayHi.ts")) || fs.writeFileSync(path.join(helpersPath, "sayHi.ts"), `const sayHi = (): void => {
  console.log('Hello World')
}

export default sayHi`);
  } else {
    fs.existsSync(path.join(helpersPath, "sayHi.js")) || fs.writeFileSync(path.join(helpersPath, "sayHi.js"), `const sayHi = () => {
  console.log('Hello World')
}

export default sayHi`);
  }

  const modulesPath = path.join(getRootDir(), "modules");

  fs.existsSync(modulesPath) || fs.mkdirSync(modulesPath);
  const modules = getModules();
  modules.forEach((module: string) => {
    const pathing = path.join(modulesPath, module);
    fs.existsSync(pathing) || fs.mkdirSync(pathing);
    createFoldersForModule(pathing, module);
  });
}
