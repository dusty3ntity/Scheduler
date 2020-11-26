import { Request, Response } from "express";

import { EventModel } from "../../../../models/event";

export const updateEvent = async (req: Request, res: Response): Promise<void> => {
	try {
		const result = await EventModel.updateOne({ _id: req.params.id }, req.body);

		if (result.nModified) {
			return res.status(204).end();
		}

		return res.status(404).end();
	} catch (err) {
		return res.status(500).end();
	}
};
