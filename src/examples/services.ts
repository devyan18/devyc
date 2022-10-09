export function serviceExampleJs (module: string) {
  const moduleWithPascalCase = module.charAt(0).toUpperCase() + module.slice(1);

  return (
`export async function getAll${moduleWithPascalCase} () {
  try {
    // ...
  } catch (error) {
    
  }
}

export async function get${moduleWithPascalCase}ById (id) {
  try {
    // ...
  } catch (error) {
    
  }
}

export async function create${moduleWithPascalCase} (${moduleWithPascalCase}) {
  try {
    // ...
  } catch (error) {
    
  }
}

export async function update${moduleWithPascalCase} (${moduleWithPascalCase}) {
  try {
    // ...
  } catch (error) {
    
  }
}

export async function delete${moduleWithPascalCase} (id) {
  try {
    // ...
  } catch (error) {
    
  }
}`
  );
}

export function serviceExampleTs (module: string) {
  const moduleWithPascalCase = module.charAt(0).toUpperCase() + module.slice(1);

  return (
`export async function getAll${moduleWithPascalCase} () {
  try {
    // ...
  } catch (error) {
    
  }
}

export async function get${moduleWithPascalCase}ById (id: string) {
  try {
    // ...
  } catch (error) {
    
  }
}

export async function create${moduleWithPascalCase} (${moduleWithPascalCase}: {}) {
  try {
    // ...
  } catch (error) {
    
  }
}

export async function update${moduleWithPascalCase} (${moduleWithPascalCase}: {}) {
  try {
    // ...
  } catch (error) {
    
  }
}

export async function delete${moduleWithPascalCase} (id: {}) {
  try {
    // ...
  } catch (error) {
    
  }
}`
  );
}
