import fs from "fs";
import path from "path";
import { getConfigFileName } from "./gettersFromConfigFile";

const createInitialFile = (fw:string, arch: string, lang: string, ptrn: string, mod: Array<string>) => {
  const fileName = getConfigFileName();

  const data = {
    framework: fw,
    dir: "./",
    architecture: arch,
    typescript: lang,
    pattern: ptrn,
    modules: mod
  };

  fs.writeFileSync(path.join(process.cwd(), fileName), JSON.stringify(data, null, 2));

  console.log(JSON.stringify(data, null, 2));

  console.log("\n\n✅ init parameters writed.");
};

export default createInitialFile;
