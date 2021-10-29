import { Router } from "express";
import { celebrate, Joi } from "celebrate";

import { SendWhatsappMessageController } from "@src/controllers/SendWhatsappMessageController";
import { CreateContactController } from "@src/controllers/CreateContactController";

const routes = Router();

routes.post("/send-message", celebrate({
  body: {
    phone: Joi.number().required(),
    message: Joi.string().min(1).max(65500).required()
  }
}), new SendWhatsappMessageController().handle);

routes.post("/contact", celebrate({
  body: {
    name: Joi.string().min(1).max(190).required(),
    phone: Joi.number().required(),
  }
}), new CreateContactController().handle);

export { routes };
