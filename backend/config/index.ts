/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const configPath = `.env.${process.env.NODE_ENV}`;

const envFound = dotenv.config({ path: configPath });
if (envFound.error) {
	throw new Error("Couldn't find .env file");
}

const config = {
	port: process.env.PORT!,
	dbConnectionString: process.env.DB_CONNECTION_STRING!,
	api: {
		prefix: "/api",
	},
};

export default config;
