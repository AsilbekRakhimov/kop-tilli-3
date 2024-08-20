import Joi from "joi";

export const signUpUserSchema = Joi.object({
    full_name:Joi.string().min(2),
    email:Joi.string().required(),
    password: Joi.string().min(4)
})