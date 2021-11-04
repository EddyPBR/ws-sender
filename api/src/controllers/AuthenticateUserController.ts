import { Request, Response } from "express";
import { AuthenticateUserService } from "@services/AuthenticateUserService";

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password }: IAuthenticateUserRequest = request.body;

    const service = new AuthenticateUserService();

    const result = await service.execute(email, password);

    return response.json(result);
  }
}

export { AuthenticateUserController };