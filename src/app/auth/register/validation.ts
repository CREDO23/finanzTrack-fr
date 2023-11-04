import * as joi from 'joi';

const defaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const registerSchema = joi.object({
  name: joi.string().required().min(5).messages({
    'any.required': 'The name is required',
    'any.min': 'The name must be at least 5 characters',
  }),
  email: joi
    .string()
    .required()
    .pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/)
    .messages({
      'any.required': 'Must not be empty',
      'string.pattern.base': 'Must be a valid email address',
    }),
  password: joi.string().required().min(5).messages({
    'any.required': 'The passowrd is required',
    'any.min': 'The password must be at least 5 characters',
  }),
  confirmPassword: joi
    .string()
    .required()
    .equal(joi.ref('password'))
    .options({ messages: { 'any.only': "Must much 'password'" } }),
});

export { registerSchema, defaultValues };
