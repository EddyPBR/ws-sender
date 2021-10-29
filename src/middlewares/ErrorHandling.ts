import type { Request, Response, NextFunction } from "express";
import { isCelebrateError } from "celebrate";
import { ApplicationException } from "@src/exceptions/ApplicationException";

export function ErrorHandling(
	err: Error,
	request: Request,
	response: Response,
	next: NextFunction
) {
	if (err instanceof ApplicationException) {
		return response.status(err.statusCode).json({ message: err.message });
	}

	if (isCelebrateError(err)) {
		if (err.message === "Validation failed") {
			return response.status(400).json({
				message: "Error data porly formated"
			});
		}

		return response.status(400).json({
			message: err.message
		});
	}

	return response.status(500).json({
		message: "Internal server error",
	});
}
