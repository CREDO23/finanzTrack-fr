import * as joi from 'joi';

const defaultValues = {
  category_id: '',
  description: '',
  amount: 0,
};

const newTransactionSchema = joi.object({
    category_id: joi
      .string()
      .required()
      .messages({
        'any.required': 'Must not be empty',
      }),
    description: joi.string().min(5).messages({
      'any.min': 'The description must be at least 5 characters',
    }),
    amount: joi.number().min(1).required().messages({
        'any.required': 'Must not be empty',
        'number.min': 'The amount must be at least 1 $'
    })
  }) ;


export {defaultValues , newTransactionSchema}