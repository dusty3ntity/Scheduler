import { Request, Response } from "express";

import { EventModel } from "../../../../models/event";

export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
	try {
		const result = await EventModel.deleteOne({ _id: req.params.id });

		if (result.deletedCount) {
			return res.status(204).end();
		}

		return res.status(404).end();
	} catch (err) {
		return res.status(500).end();
	}
};
