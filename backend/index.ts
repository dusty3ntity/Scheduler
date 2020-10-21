import express from "express";

import initLoaders from "./loaders";

const runServer = async () => {
	const app = express();

	await initLoaders({ app });

	app.listen(5080, () => {
		console.log("Server running on port 5080");
	});
};

runServer();
