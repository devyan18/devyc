import fs from "fs";
import path from "path";
import { Projects } from "../actions/init";
import { getConfigFileName } from "./gettersFromConfigFile";

const createInitialFile = (type:string, arch: string, lang: boolean) => {
  const fileName = getConfigFileName();

  const data = {
    type: type === Projects.Express ? "express" : "react",
    dir: "./",
    architecture: arch,
    typescript: lang,
    modules: []
  };

  fs.writeFileSync(path.join(process.cwd(), fileName), JSON.stringify(data, null, 2));
};

export default createInitialFile;
