import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { ApplicationException } from "@exceptions/ApplicationException";

interface IPayload {
	sub: string;
}

export function EnsureAuthenticated(request: Request, response: Response, next: NextFunction) {
	const { ['was@token']: token } = request.cookies;

	if (!token) {
		throw new ApplicationException("Not authorized", 401);
	}

	try {
		const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

		request.user_id = sub;

		return next();
	} catch (err) {
		throw new ApplicationException("Not authorized", 401);
	}
}