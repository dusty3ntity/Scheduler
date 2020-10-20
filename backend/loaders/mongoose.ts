import mongoose from "mongoose";
import { Db } from "mongodb";

const initializeMongoose = async (): Promise<Db> => {
	const conection = await mongoose.connect("mongodb://localhost:27017/scheduler", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	return conection.connection.db;
};

export default initializeMongoose;
