import { Request, Response } from "express";
import { GetUserDataService } from "@services/GetUserDataService";

class UserDataController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const service = new GetUserDataService();

    const { email } = await service.execute(user_id);

    return response.json({
      email
    });
  }
}

export { UserDataController };