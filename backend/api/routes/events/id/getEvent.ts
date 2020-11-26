import { Request, Response } from "express";

import { IEvent } from "../../../../interfaces/IEvent";
import { EventModel } from "../../../../models/event";

export const getEvent = async (req: Request, res: Response): Promise<Response<IEvent> | void> => {
	try {
		const event = (await EventModel.find({ _id: req.params.id }))[0];

		if (event) {
			const eventResponse: IEvent = {
				id: event._id,
				title: event.title,
				startDate: event.startDate,
				endDate: event.endDate,
			};

			return res.json(eventResponse).status(200);
		}

		return res.status(404).end();
	} catch {
		return res.status(500).end();
	}
};
