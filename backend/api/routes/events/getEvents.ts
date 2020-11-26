import { Request, Response } from "express";
import { IEvent } from "../../../interfaces/IEvent";

import { EventModel } from "../../../models/event";

export const getEvents = async (req: Request, res: Response): Promise<Response<IEvent[]>> => {
	const events = await EventModel.find({});

	const eventsResponse: IEvent[] = events.map((e) => ({
		id: e._id,
		title: e.title,
		startDate: e.startDate,
		endDate: e.endDate,
	}));

	return res.json(eventsResponse).status(200);
};
