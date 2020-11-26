import { Request, Response } from "express";

import { EventModel } from "../../../models/event";

export const createEvent = async (req: Request, res: Response): Promise<Response<string> | void> => {
	try {
		const event = new EventModel(req.body);
		const success = await event.save();

		if (success) {
			return res.json(event._id).status(201).end();
		}

		throw new Error("Problem saving changes");
	} catch (err) {
		return res.status(500).end();
	}
};
