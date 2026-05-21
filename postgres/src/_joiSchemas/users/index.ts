import Joi from "joi";

export const textSchema = Joi.string().required();
export const uidSchema = Joi.string().required();
export const idSchema = Joi.number().required();

export const user = Joi.object({
  email: textSchema,
  password: textSchema,
  name: Joi.string().allow(null)
});

export const userAuth = Joi.object({
  email: textSchema,
  password: textSchema
});

export const userId = Joi.string().max(80).required();
