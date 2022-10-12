function moduleWithPascalCase (module:string) {
  return module.charAt(0).toUpperCase() + module.slice(1);
};

export function repositoryExample (module: string) {
  const pascalModule = moduleWithPascalCase(module);

  return (
`import { MongooseRepository } from "../../declarations";
import ${pascalModule} from "../interfaces/${module}.entity";

export class ${pascalModule}Repository implements MongooseRepository {
  async create(data: Partial<${pascalModule}>, query) {
    throw new Error("Method not implemented.");
  }
  async list(query): Promise<${pascalModule}[]> {
    throw new Error("Method not implemented.");
  }
  async get(id): Promise<${pascalModule}> {
    throw new Error("Method not implemented.");
  }
  async update(id, data, query): Promise<${pascalModule}> {
    throw new Error("Method not implemented.");
  }
  async remove(id, query): Promise<${pascalModule}> {
    throw new Error("Method not implemented.");
  }
}`
  );
}
