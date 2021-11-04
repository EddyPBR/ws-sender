import { Router } from "express";
// import { celebrate, Joi } from "celebrate";

// import { SendWhatsappMessageController } from "@src/controllers/SendWhatsappMessageController";
// import { CreateContactController } from "@src/controllers/CreateContactController";
// import { CreateQRCodeController } from "@src/controllers/CreateQRCodeController";
// import { SetWhatsappSessionController } from "@src/controllers/SetWhatsappSessionController";

const routes = Router();

// routes.post("/send-message", celebrate({
// 	body: {
// 		phone: Joi.string().required().regex(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/),
// 		message: Joi.string().min(1).max(65500).required()
// 	}
// }), new SendWhatsappMessageController().handle);

// routes.post("/contact", celebrate({
// 	body: {
// 		name: Joi.string().min(1).max(190).required(),
// 		phone: Joi.string().required().regex(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/),
// 	}
// }), new CreateContactController().handle);

// routes.get("/qrcode", new CreateQRCodeController().handle);

// routes.post("/session", celebrate({
// 	body: {
// 		WABrowserId: Joi.string().required(),
// 		WASecretBundle: Joi.string().required(),
// 		WAToken1: Joi.string().required(),
// 		WAToken2: Joi.string().required()
// 	}
// }), new SetWhatsappSessionController().handle);

export { routes };