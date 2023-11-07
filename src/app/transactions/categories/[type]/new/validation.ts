import * as joi from 'joi';

const defaultValues = {
  name: '',
  description: '',
};

const newCategorySchema = joi.object({
    name: joi
      .string()
      .required()
      .messages({
        'any.required': 'Must not be empty',
      }),
    description: joi.string().min(5).messages({
      'any.min': 'The description must be at least 5 characters',
    }),
  }) ;


export {defaultValues , newCategorySchema}