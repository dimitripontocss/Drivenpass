import joi from 'joi';

export const cardSchema = joi.object({
    title: joi.string().required(),
    number: joi.string().required(),
    owner: joi.string().required(),
    securityCode: joi.string().required().length(3),
    expirationDate: joi.string().required().length(5),
    password: joi.string().required().length(4),
    isVirtual: joi.boolean().required(),
    type: joi.valid('CREDIT', 'DEBIT', 'BOTH').required(),
})