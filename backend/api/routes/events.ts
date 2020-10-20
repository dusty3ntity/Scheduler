import { Response, Router } from "express";

import { events } from "./../../events";

const initEventsRoutes = (router: Router): void => {
	const route = Router();

	router.use("/events", route);
	route.get("/", (_, res: Response) => res.send(events));
};

export default initEventsRoutes;