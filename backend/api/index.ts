import { Router } from "express";

import initEventsRoutes from "./routes/events";

export default (): Router => {
	const router = Router();
	initEventsRoutes(router);
	return router;
};
