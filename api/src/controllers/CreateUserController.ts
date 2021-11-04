import { Request, Response } from "express";
import { CreateUserService } from "@services/CreateUserService";

interface ICreateUserRequest {
  email: string;
  password: string;
}

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, password }: ICreateUserRequest = request.body;

    const service = new CreateUserService();

    const result = await service.execute(email, password);

    return response.status(200).json({
      ...result
    });
  }
}

export { CreateUserController };
