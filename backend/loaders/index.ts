import express from "express";

import { initializeExpress } from "./express";
import { initializeMongoose } from "./mongoose";
import { seedData } from "./seeder";

export const initLoaders = async ({ app }: { app: express.Application }): Promise<void> => {
	await initializeMongoose();
	await seedData();

	initializeExpress({ app });
};
