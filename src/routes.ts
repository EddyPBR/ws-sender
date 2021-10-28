import { Router } from "express";

import { SendWhatsappMessageController } from "@src/controllers/SendWhatsappMessageController";
import { CreateContactController } from "@src/controllers/CreateContactController";

const routes = Router();

routes.post("/send-message", new SendWhatsappMessageController().handle);
routes.post("/contact", new CreateContactController().handle);

export { routes };
