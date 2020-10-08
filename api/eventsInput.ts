import moment from "moment";

const events = [
	{
		name: "Go to the dentist",
		date: moment().add(1, "d"),
		startTime: moment().add(1, "d").hour(7).minute(30),
		endTime: moment().add(1, "d").hour(8).minute(30),
	},
	{
		name: "Go to the sauna",
		date: moment().add(1, "d"),
		startTime: moment().add(1, "d").hour(8).minute(30),
		endTime: moment().add(1, "d").hour(19).minute(30),
	},
	{
		name: "Go to the barbershop",
		date: moment().add(2, "d"),
		startTime: moment().add(2, "d").hour(13).minute(0),
		endTime: moment().add(2, "d").hour(14).minute(0),
	},
	{
		name: "Live coding",
		date: moment().add(3, "d"),
		startTime: moment().add(3, "d").hour(17).minute(0),
		endTime: moment().add(3, "d").hour(18).minute(45),
	},
];

module.exports = events;
