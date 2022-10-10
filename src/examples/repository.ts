function moduleWithPascalCase (module:string) {
  return module.charAt(0).toUpperCase() + module.slice(1);
};

export function repositoryExampleJs (module: string) {
  const pascalModule = moduleWithPascalCase(module);

  return (
`export default class ${pascalModule}Repository {
  constructor (model) {
    this.model = model;
    }
  ` + "  " + `getAll () {
    try {
      // ...
    } catch (error) {
      
    }
  }
  ` + "  " + `getById (id) {
    try {
      // ...
    } catch (error) {
      
    }
  }
  ` + "  " + `create (${module}) {
    try {
      // ...
    } catch (error) {
      
    }
  }
  ` + "  " + `update (id, ${module}) {
    try {
      // ...
    } catch (error) {
      
    }
  }
  ` + "  " + `delete (id) {
    try {
      // ...
    } catch (error) {
      
    }
  }
}`
  );
}
