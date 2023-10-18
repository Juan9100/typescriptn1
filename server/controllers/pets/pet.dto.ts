import Joi from 'joi';

export const limitSchema = Joi.number().optional();

export const petInfoSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    typeOfPet: Joi.string().required(),
    _id: Joi.string().optional()
})

export const idSchema = Joi.object({
    id: Joi.string().required()
})
