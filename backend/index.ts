import express from "express";

import { config } from "./config";
import { initLoaders } from "./loaders";

const runServer = async () => {
	const app = express();

	await initLoaders({ app });

	app.listen(config.port, () => {
		console.log(`Server running on port ${config.port}`);
	});
};

runServer();
