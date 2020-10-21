import express from "express";
import bodyParser from "body-parser";

import routes from "../api/index";
import config from "../config";

const initializeExpress = ({ app }: { app: express.Application }): void => {
	app.use(bodyParser.json());
	app.use(config.api.prefix, routes());
};

export default initializeExpress;
