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

    const { token } = await service.execute(email, password);

    return response.status(200).cookie("was@token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24
    }).json({
      message: "Successfully authenticated"
    });
  }
}

export { AuthenticateUserController };