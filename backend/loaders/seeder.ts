import moment from "moment";

import Event from "../models/event";

const seedData = async (): Promise<void> => {
	const events = await Event.exists({});
	if (events) {
		return;
	}
	const success = await Event.insertMany(testEvents);

	if (success) {
		console.log("Seeded test data");
	} else {
		throw new Error("Problem seeding data");
	}
};

const testEvents = [
	{
		title: "Go to the dentist",
		startDate: moment().add(1, "d").hour(7).minute(30),
		endDate: moment().add(1, "d").hour(8).minute(30),
	},
	{
		title: "Go to the sauna",
		startDate: moment().add(1, "d").hour(8).minute(30),
		endDate: moment().add(1, "d").hour(19).minute(30),
	},
	{
		title: "Go to the barbershop",
		startDate: moment().add(2, "d").hour(13).minute(0),
		endDate: moment().add(2, "d").hour(14).minute(0),
	},
	{
		title: "Live coding",
		startDate: moment().add(3, "d").hour(17).minute(0),
		endDate: moment().add(3, "d").hour(18).minute(45),
	},
];

export default seedData;
