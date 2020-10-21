import express from "express";

import seedData from "./loaders/seeder";
import initializeExpress from "./loaders/express";
import initializeMongoose from "./loaders/mongoose";

const start = async () => {
	const app = express();

	initializeExpress({ app: app });
	await initializeMongoose();
	await seedData();
	app.listen(5080, () => {
		console.log("Server running on port 5080");
	});
};

start();
