import fs from "fs";
import { getConfigFileName } from "./gettersFromConfigFile";

export function setNewModuleInConfigFile (module: string) {
  const configFile = getConfigFileName();

  const data = JSON.parse(fs.readFileSync(configFile).toString());

  const newData = { ...data, modules: [...data.modules, module] };

  fs.writeFileSync(configFile, JSON.stringify(newData, null, 2));
};
