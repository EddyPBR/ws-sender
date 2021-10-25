import { Router } from "express";

import { SendWhatsappMessageController } from "@src/controllers/SendWhatsappMessageController";

const routes = Router();

routes.post("/send-message", new SendWhatsappMessageController().handle);

export { routes };
