import moment from "moment";

import { EventI } from "../models/events";

export const testEvents: EventI[] = [
	{
		id: "0",
		title: "NIT",
		startDate: moment().subtract(1, "d").hour(13).minute(30).toDate(),
		endDate: moment().subtract(1, "d").hour(14).minute(50).toDate(),
	},
	{
		id: "1",
		title: "Go to the dentist",
		startDate: moment().add(1, "d").hour(7).minute(30).toDate(),
		endDate: moment().add(1, "d").hour(8).minute(30).toDate(),
	},
	{
		id: "2",
		title: "Go to the sauna",
		startDate: moment().add(1, "d").hour(8).minute(30).toDate(),
		endDate: moment().add(1, "d").hour(19).minute(30).toDate(),
	},
	{
		id: "3",
		title: "Go to the barbershop",
		startDate: moment().add(2, "d").hour(13).minute(0).toDate(),
		endDate: moment().add(2, "d").hour(14).minute(0).toDate(),
	},
	{
		id: "4",
		title: "Live coding",
		startDate: moment().add(3, "d").hour(17).minute(0).toDate(),
		endDate: moment().add(3, "d").hour(18).minute(45).toDate(),
	},
	{
		id: "5",
		title: "Live coding",
		startDate: moment().add(7, "d").hour(17).minute(0).toDate(),
		endDate: moment().add(7, "d").hour(18).minute(45).toDate(),
	},
];
