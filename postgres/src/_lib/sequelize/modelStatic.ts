import {
  AllowReadonlyArray,
  Attributes,
  BulkCreateOptions,
  CountOptions,
  CreateOptions,
  DestroyOptions,
  FindOptions,
  FindOrCreateOptions,
  IncrementDecrementOptionsWithBy,
  Model,
  ModelStatic,
  Optional,
  UpdateOptions
} from "sequelize/types";
import sequelize from "@src/models";

const db = sequelize.instance();

const modelStatic = (key: any): ModelStatic<Model> => {
  // transaction CLS is enabled
  return db[key];
};

export const findOne = <T extends Model>(
  model: string,
  options?: FindOptions<Attributes<T>>
): Promise<T | null> => {
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
  values: {
    [x: string]: any;
  },
  options: Omit<UpdateOptions<any>, "returning"> & {
    returning: true | (string | number | symbol)[];
  }
): Promise<[number, T[]]> => {
  return modelStatic(model).update(values, options) as Promise<[number, T[]]>;
};

export const create = <T extends Model>(
  model: string,
  values?: Optional<any, string> | undefined,
  options?: CreateOptions<any> | undefined
): Promise<T | null> => {
  return modelStatic(model).create(values, options) as Promise<T | null>;
};

export const bulkCreate = <T extends Model>(
  model: string,
  records: readonly Optional<any, string>[],
  options?: BulkCreateOptions<any> | undefined
): Promise<T[]> => {
  return modelStatic(model).bulkCreate(records, options) as Promise<T[]>;
};

export const destroy = (
  model: string,
  options?: DestroyOptions<any> | undefined
): Promise<number> => {
  return modelStatic(model).destroy(options) as Promise<number>;
};

export const increment = <T extends Model>(
  model: string,
  fields: AllowReadonlyArray<string | number | symbol>,
  options: IncrementDecrementOptionsWithBy<any>
): Promise<[affectedRows: T[], affectedCount?: number]> => {
  return modelStatic(model).increment(fields, options) as Promise<
    [affectedRows: T[], affectedCount?: number]
  >;
};

export const count = (
  model: string,
  options?: Omit<CountOptions<any>, "group"> | undefined
): Promise<number> => {
  return modelStatic(model).count(options);
};

// export const managedTransaction = (model: string, args: any) => {
//   db.sequelize?.transaction(async (t) => {
//     return modelStatic(model).[]
//   })
// }
