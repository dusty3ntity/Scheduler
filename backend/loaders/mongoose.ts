import mongoose from "mongoose";
import { Db } from "mongodb";

const initializeMongoose = async (): Promise<Db> => {
	try {
		const conection = await mongoose.connect("mongodb://localhost:27017/scheduler", {
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
