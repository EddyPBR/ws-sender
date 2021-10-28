import { Request, Response } from "express";
import { CreateContactService } from "@src/services/CreateContactService";

interface ICreateContactRequestBody {
  name: string;
  phone: string;
}

class CreateContactController {
  async handle(request: Request, response: Response) {
    const { name, phone }: ICreateContactRequestBody = request.body;

    const service = new CreateContactService();

    const result = await service.execute(name, phone);

    return response.status(200).json({
      result
    });
  }
}

export { CreateContactController };
