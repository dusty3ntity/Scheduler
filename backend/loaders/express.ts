import express from "express";
import bodyParser from "body-parser";

import routes from "../api/index";

const initializeExpress = ({ app }: { app: express.Application }): void => {
	app.use(bodyParser.json());
	app.use("/api", routes());
};

export default initializeExpress;
