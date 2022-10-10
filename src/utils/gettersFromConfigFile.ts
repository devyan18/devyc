import fs from "fs";

export function getConfigFileName ():string {
  const CONFIG_FILENAME = "devy.json";

  return CONFIG_FILENAME;
}

export function getFramework (): string {
  const fileName = getConfigFileName();
  const configFile = fs.readFileSync(fileName);

  return JSON.parse(configFile.toString()).framework;
}

export function getRootDir (): string {
  const configFile = getConfigFileName();

  const data = fs.readFileSync(configFile);
  const dir = JSON.parse(data.toString()).dir;
  return dir;
}

export function getModules () {
  const configFile = getConfigFileName();

  const data = fs.readFileSync(configFile);
  const modules = JSON.parse(data.toString()).modules;
  return modules;
}

export function getLang ():string {
  const configFile = getConfigFileName();

  return JSON.parse(fs.readFileSync(configFile).toString()).language;
}

export function getArch () {
  const configFile = getConfigFileName();

  const data = fs.readFileSync(configFile);
  const arch = JSON.parse(data.toString()).architecture;
  return arch;
}

export function getPattern () {
  const configFile = getConfigFileName();

  const data = fs.readFileSync(configFile);
  const pattern = JSON.parse(data.toString()).pattern;
  return pattern;
}
