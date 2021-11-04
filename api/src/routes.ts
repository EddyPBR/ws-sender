import { Router } from "express";
import { celebrate, Joi } from "celebrate";

import { CreateUserController } from "@controllers/CreateUserController";
import { AuthenticateUserController } from "@controllers/AuthenticateUserController";

const routes = Router();

routes.post("/user", celebrate({
  body: {
    email: Joi.string().lowercase().email().required(),
    password: Joi.string().min(6).max(18).required()
  }
}), new CreateUserController().handle);

routes.post("/authenticate", celebrate({
  body: {
    email: Joi.string().lowercase().email().required(),
    password: Joi.string().required()
  }
}), new AuthenticateUserController().handle);

export { routes };