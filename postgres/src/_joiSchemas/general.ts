import Joi from "joi";

export const textSchema = Joi.string().required();
export const numberSchema = Joi.number().required();
