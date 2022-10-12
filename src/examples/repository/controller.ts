export function createController (module: string) {
  const modulePascalCaes = module[0].toUpperCase() + module.slice(1);

  return (
`import { Request, Response, NextFunction } from "express";
import { MongooseRepository } from "../../declarations";

export class ${modulePascalCaes}Controller {
  constructor (private repository: MongooseRepository<${modulePascalCaes}>) {}


  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(201).json({
      message: "${modulePascalCaes}Controller.create",
    });
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "${modulePascalCaes}Controller.list",
    });
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "${modulePascalCaes}Controller.get",
    });
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(203).json({
      message: "${modulePascalCaes}Controller.update",
    });
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(203).json({
      message: "${modulePascalCaes}Controller.remove",
    });
  }
}
  `);
}
