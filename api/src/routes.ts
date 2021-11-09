import { Router } from "express";
import { celebrate, Joi } from "celebrate";

import { EnsureAuthenticated } from "@middlewares/EnsureAuthenticated";

import { CreateUserController } from "@controllers/CreateUserController";
import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { UnauthenticateUserController } from "@controllers/UnauthenticateUserController";
import { UserDataController } from "@controllers/UserDataController";

const routes = Router();

routes.post("/user", celebrate({
  body: {
    email: Joi.string().lowercase().email().required(),
    password: Joi.string().min(6).max(18).required()
  }
}), new CreateUserController().handle);

routes.get("/user", EnsureAuthenticated, new UserDataController().handle);

routes.post("/authenticate", celebrate({
  body: {
    email: Joi.string().lowercase().email().required(),
    password: Joi.string().required()
  }
}), new AuthenticateUserController().handle);

routes.delete("/authenticate", new UnauthenticateUserController().handle);

export { routes };