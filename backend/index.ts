import express from "express";

import initializeExpress from "./loaders/express";

const start = () => {
	const app = express();

	initializeExpress({ app: app });

	app.listen(5080, () => {
		console.log("Server running on port 5080");
	});
};

start();
