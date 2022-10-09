export function modelCreatorTs (module: string) {
  const moduleWithPascaleCase = module[0].toUpperCase() + module.slice(1).toLowerCase();
  return (`import { model, Schema, Document } from "mongoose";
import ${moduleWithPascaleCase} from '../interfaces/${module}.entity'

export interface ${moduleWithPascaleCase}Model extends ${moduleWithPascaleCase}, Document {}

const ${moduleWithPascaleCase}Schema = new Schema<${moduleWithPascaleCase}Model>({

}, {
  timestamps: true
})

export default model('${moduleWithPascaleCase}', ${moduleWithPascaleCase}Schema)`);
};

export function modelCreatorJs (module: string) {
  const moduleWithPascaleCase = module[0].toUpperCase() + module.slice(1).toLowerCase();
  return (
`import { model, Schema } from "mongoose";

const ${moduleWithPascaleCase}Schema = new Schema({

}, {
  timestamps: true
})

export default model('${moduleWithPascaleCase}', ${moduleWithPascaleCase}Schema)`);
};
