import mongoose from "mongoose";
import { Db } from "mongodb";

import config from "../config";

const initializeMongoose = async (): Promise<Db> => {
	try {
		const conection = await mongoose.connect(config.dbConnectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		return conection.connection.db;
	} catch (e) {
		console.log("Server Error", e.message);
		process.exit(1);
	}
};

export default initializeMongoose;
