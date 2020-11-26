import { Router } from "express";

import { initEventsRoutes } from "./routes/events";

export const initRoutes = (): Router => {
	const router = Router();

	initEventsRoutes(router);

	return router;
};
