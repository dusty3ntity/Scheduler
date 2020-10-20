import { Response, Router } from "express";

import Event from "../../models/event";

const initEventsRoutes = (router: Router): void => {
	const route = Router();

	router.use("/events", route);
	route.get("/", async (_, res: Response) => {
		const events = await Event.find({});
		return res.json(events).status(200);
	});
};

export default initEventsRoutes;
