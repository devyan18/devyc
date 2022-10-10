function moduleWithPascalCase (module:string) {
  return module.charAt(0).toUpperCase() + module.slice(1);
};

export function testExampleJs (module: string) {
  const pascalModule = moduleWithPascalCase(module);

  return (
`test("${pascalModule} test", () => {
  expect(true).toBe(true);
})`
  );
}
export function testExampleTs (module: string) {
  const pascalModule = moduleWithPascalCase(module);

  return (
`import { expect } from "@jest/globals";
test("${pascalModule} test", () => {
  expect(true).toBe(true);
})`
  );
}
