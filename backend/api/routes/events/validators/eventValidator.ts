import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const validateEvent = (req: Request, res: Response, next: NextFunction): Response<void> | void => {
	const createRules = Joi.object({
		title: Joi.string().required().max(50),
		startDate: Joi.date().required(),
		endDate: Joi.date().required(),
	});

	const result = createRules.validate(req.body);

	if (result.error) {
		return res.status(400).json({ message: "missing required field" });
	}

	next();
};
