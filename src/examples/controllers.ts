export function controllerExampleJs (module: string) {
  const moduleWithPascalCase = module.charAt(0).toUpperCase() + module.slice(1);

  return (
`export async function getAll${moduleWithPascalCase}sCtrl(req, res) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'getAll ${moduleWithPascalCase}s'})
  }
}

export async function get${moduleWithPascalCase}ByIdCtrl(req, res) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'get ${moduleWithPascalCase}ById'})
  }
}

export async function create${moduleWithPascalCase}Ctrl(req, res) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'create ${moduleWithPascalCase}'})
  }
}

export async function update${moduleWithPascalCase}Ctrl(req, res) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'update ${moduleWithPascalCase}'})
  }
}

export async function delete${moduleWithPascalCase}Ctrl(req, res) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'delete ${moduleWithPascalCase}'})
  }
}`);
}
export function controllerExampleTs (module: string) {
  const moduleWithPascalCase = module.charAt(0).toUpperCase() + module.slice(1);

  return (
`import { Request, Response } from 'express'

export async function getAll${moduleWithPascalCase}sCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'getAll ${moduleWithPascalCase}s'})
  }
}

export async function get${moduleWithPascalCase}ByIdCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'get ${moduleWithPascalCase}ById'})
  }
}

export async function create${moduleWithPascalCase}Ctrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'create ${moduleWithPascalCase}'})
  }
}

export async function update${moduleWithPascalCase}Ctrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'update ${moduleWithPascalCase}'})
  }
}

export async function delete${moduleWithPascalCase}Ctrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'delete ${moduleWithPascalCase}'})
  }
}`
  );
}
