import { Router } from "express";
import { celebrate, Joi } from "celebrate";

import { CreateUserController } from "@controllers/CreateUserController";

const routes = Router();

routes.post("/user", celebrate({
  body: {
    email: Joi.string().lowercase().email().required(),
    password: Joi.string().min(6).max(18).required()
  }
}), new CreateUserController().handle);

export { routes };