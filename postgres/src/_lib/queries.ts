import { Model, ModelStatic } from "node_modules/sequelize/types";
import sequelize from "../models";

const db = sequelize.instance();

const staticModel = (key: any): ModelStatic<Model> => {
  return db[key];
};

export const findOne = <T extends Model>(model: string, args: any): Promise<T | null> => {
  return staticModel(model).findOne(args) as Promise<T | null>;
};

export const findOrCreate = <T extends Model>(
  model: string,
  args: any
): Promise<[Model<T>, boolean]> => {
  return staticModel(model).findOrCreate(args) as Promise<[Model<T>, boolean]>;
};

export const findAll = <T extends Model>(model: string, args: any): Promise<T[]> => {
  return staticModel(model).findAll(args) as Promise<T[]>;
};

export const update = <T extends Model>(
  model: string,
  args: any,
  options: any
): Promise<[number, T[]]> => {
  return staticModel(model).update(args, options) as Promise<[number, T[]]>;
};

export const create = <T extends Model>(model: string, args: any): Promise<T | null> => {
  return staticModel(model).create(args) as Promise<T | null>;
};

export const bulkCreate = <T extends Model>(
  model: string,
  args: any[],
  options: any
): Promise<T[]> => {
  return staticModel(model).bulkCreate(args, options) as Promise<T[]>;
};

export const destroy = (model: string, args: any): Promise<number> => {
  return staticModel(model).destroy(args);
};

export const increment = <T extends Model>(model: string, args: any): Promise<[T[], number?]> => {
  return staticModel(model).increment("number", args) as Promise<[T[], number?]>;
};

export const count = (model: string): Promise<number> => {
  return staticModel(model).count();
};
