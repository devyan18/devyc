export function entityCreator (module: string) {
  const moduleWithPascaleCase = module[0].toUpperCase() + module.slice(1).toLowerCase();

  return `interface ${moduleWithPascaleCase} {
  _id: string
}
export default ${moduleWithPascaleCase}`;
}
