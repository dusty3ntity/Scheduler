import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { initRoutes } from "../api/index";
import { config } from "../config";

export const initializeExpress = ({ app }: { app: express.Application }): void => {
	app.use(bodyParser.json());
	app.use(cors());
	app.use(config.api.prefix, initRoutes());
};
