import { Attributes, FindOptions, FindOrCreateOptions, Model, ModelStatic } from "node_modules/sequelize/types";
import sequelize from "../models";

const db = sequelize.instance();

const modelStatic = (key: any): ModelStatic<Model> => {
  // transaction CLS is enabled
  return db[key];
};

export const findOne = <T extends Model>( 
  model: string, 
  options?: FindOptions<Attributes<T>>): Promise<T | null> => {
  return modelStatic(model).findOne(options) as Promise<T | null>;
};

export const findOrCreate = <T extends Model>(
  model: string,
  options: FindOrCreateOptions<Attributes<T>>
): Promise<[Model<T>, boolean]> => {
  return modelStatic(model).findOrCreate(options) as Promise<[Model<T>, boolean]>;
};

export const findAll = <T extends Model>(
  model: string, 
  options?: FindOptions<Attributes<T>>
): Promise<T[]> => {
  return modelStatic(model).findAll(options) as Promise<T[]>;
};

export const update = <T extends Model>(
  model: string,
  args: any,
  options: any
): Promise<[number, T[]]> => {
  return modelStatic(model).update(args, options) as Promise<[number, T[]]>;
};

export const create = <T extends Model>(model: string, args: any): Promise<T | null> => {
  return modelStatic(model).create(args) as Promise<T | null>;
};

export const bulkCreate = <T extends Model>(
  model: string,
  args: any[],
  options: any
): Promise<T[]> => {
  return modelStatic(model).bulkCreate(args, options) as Promise<T[]>;
};

export const destroy = (model: string, args: any): Promise<number> => {
  return modelStatic(model).destroy(args);
};

export const increment = <T extends Model>(model: string, args: any): Promise<[T[], number?]> => {
  return modelStatic(model).increment("number", args) as Promise<[T[], number?]>;
};

export const count = (model: string): Promise<number> => {
  return modelStatic(model).count();
};

// export const managedTransaction = (model: string, args: any) => {
//   db.sequelize?.transaction(async (t) => {
//     return modelStatic(model).[]
//   })
// }
