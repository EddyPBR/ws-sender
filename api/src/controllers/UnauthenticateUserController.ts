import { Request, Response } from "express";

class UnauthenticateUserController {
  async handle(request: Request, response: Response) {
    return response.status(200).cookie("was@token", "", {
      httpOnly: true,
      secure: true,
      maxAge: -1
    }).json({
      message: "Unauthenticated with success"
    });
  }
}

export { UnauthenticateUserController };