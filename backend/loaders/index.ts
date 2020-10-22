import express from "express";

import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import seedData from "./seeder";

const initLoaders = async ({ app }: { app: express.Application }): Promise<void> => {
	await mongooseLoader();
	await seedData();

	expressLoader({ app });
};

export default initLoaders;
