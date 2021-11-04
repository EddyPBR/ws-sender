import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { ApplicationException } from "@exceptions/ApplicationException";

interface IPayload {
	sub: string;
}

export function EnsureAuthenticated(request: Request, response: Response, next: NextFunction) {
	const authToken = request.headers.authorization;

	if (!authToken) {
		throw new ApplicationException("Invalid token", 401);
	}

	const [, token] = authToken.split(" ");

	try {
		const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

		request.user_id = sub;

		return next();
	} catch (err) {
		throw new ApplicationException("Not authorized", 401);
	}
}