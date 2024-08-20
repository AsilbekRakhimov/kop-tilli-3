import Joi from "joi";

export const createProductSchema = Joi.object({
    name:Joi.object(),
    description: Joi.object(),
    count:Joi.number()
})