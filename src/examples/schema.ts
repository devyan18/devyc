export function schemaExample (module: string) {
  return (
`import {z} from "zod";

export const ${module}Schema = z.object({
  // ...
})`);
}
