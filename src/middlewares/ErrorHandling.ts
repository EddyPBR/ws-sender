import type { Request, Response, NextFunction } from "express";
import { ApplicationException } from "@src/exceptions/ApplicationException";

export function ErrorHandling (
	err: Error,
	request: Request,
	response: Response,
	next: NextFunction
) {
	if (err instanceof ApplicationException) {
		return response.status(err.statusCode).json({ message: err.message });
	}

	return response.status(500).json({
		message: "Internal server error",
	});
}
