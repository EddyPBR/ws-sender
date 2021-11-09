import { Request, Response } from "express";
import { AuthenticateUserService } from "@services/AuthenticateUserService";
import { GetUserDataService } from "@services/GetUserDataService";

class UserDataController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const service = new GetUserDataService();

    const { id, email } = await service.execute(user_id);

    return response.json({
      id,
      email
    });
  }
}

export { UserDataController };