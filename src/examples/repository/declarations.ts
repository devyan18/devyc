export function declarationsCreator () {
  return (`import { Types } from "mongoose";

export type Query = Record<string, any>;

export type Id = string | Types.ObjectId

export interface MongooseRepository<T> {
  create(data: Partial<T>, query?: Query): Promise<T>;
  list(query?: Query): Promise<T[]>;
  get(id: Id): Promise<T>;
  update(id: Id, data: T, query?: Query): Promise<T>;
  remove(id: Id, query?: Query): Promise<T>;
}
`);
}
