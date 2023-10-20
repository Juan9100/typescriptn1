import Joi from 'joi';

export const studentBodySchema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
    modality: Joi.string().required(),
    shift: Joi.string().required(),
    socialStratum: Joi.number().required(),
    age: Joi.number().required(),
    id: Joi.string().required(),
    birthDate: Joi.date().required(),
    overAge: Joi.boolean().required(),
    levelOfStudies: Joi.string().required(),
})
