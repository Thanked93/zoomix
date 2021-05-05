import Joi from "joi";

export const loginSchema = Joi.object({
  username: Joi.string().lowercase().min(3).max(30).required(),
  password: Joi.string().min(8).max(50).required(),
});

export const registerSchema = Joi.object({
  username: Joi.string().lowercase().min(3).max(30).required(),
  password: Joi.string().min(8).max(50).required(),
});

export const updateSchema = Joi.object({
  username: Joi.string().lowercase().min(3).max(30).required(),
  password: Joi.string().min(3).max(30).required(),
  roomPassword: Joi.string().allow("").min(0).max(30),
  changedPassword: Joi.string().min(3).max(30).required(),
  changedUsername: Joi.string().lowercase().min(3).max(30).required(),
});
