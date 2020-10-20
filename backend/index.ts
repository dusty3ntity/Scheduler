import express from "express";

import initializeExpress from "./loaders/express";
import initializeMongoose from "./loaders/mongoose";

const start = async () => {
	const app = express();

	initializeExpress({ app: app });
	await initializeMongoose();
	app.listen(5080, () => {
		console.log("Server running on port 5080");
	});
};

start();
