const Joi = require('joi');


const validator = (dataSchema) => (payload) =>
    dataSchema.validate(payload, {
        abortEarly: false
    })


const contentSchema = Joi.object({
    serialNumber : Joi.number().required(),
    seriesOrMovieName : Joi.string().required(),
    villainName : Joi.string().required(),
    actions: Joi.string().required(),
    villainImgLink: Joi.string().uri(),
    posterLink: Joi.string().uri()
})

exports.validateInput = validator(contentSchema);