import Joi from "joi";

export const textSchema = Joi.string().required();
export const idSchema = Joi.number().required();

export const fullCompany = Joi.object({
  name: textSchema,
  activity: textSchema,
  owner: textSchema
});

export const updateCompany = Joi.object({
  name: Joi.string().required(),
  activity: Joi.string().required(),
  owner: Joi.string().required()
});

export const addAddress = Joi.object({
  street: Joi.string().required(),
  postcode: Joi.number().required(),
  city: Joi.string().required()
});
