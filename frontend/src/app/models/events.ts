import moment from "moment";

export interface Event {
	title: string;
	startDate: Date;
	endDate: Date;
}

export interface Day {
	date: Date;
	events: Event[];
}

export const testEvents: Event[] = [
	{
		title: "NIT",
		startDate: moment().subtract(1, "d").hour(13).minute(30).toDate(),
		endDate: moment().subtract(1, "d").hour(14).minute(50).toDate(),
	},
	{
		title: "Go to the dentist",
		startDate: moment().add(1, "d").hour(7).minute(30).toDate(),
		endDate: moment().add(1, "d").hour(8).minute(30).toDate(),
	},
	{
		title: "Go to the sauna",
		startDate: moment().add(1, "d").hour(8).minute(30).toDate(),
		endDate: moment().add(1, "d").hour(19).minute(30).toDate(),
	},
	{
		title: "Go to the barbershop",
		startDate: moment().add(2, "d").hour(13).minute(0).toDate(),
		endDate: moment().add(2, "d").hour(14).minute(0).toDate(),
	},
	{
		title: "Live coding",
		startDate: moment().add(3, "d").hour(17).minute(0).toDate(),
		endDate: moment().add(3, "d").hour(18).minute(45).toDate(),
	},
	{
		title: "Live coding",
		startDate: moment().add(7, "d").hour(17).minute(0).toDate(),
		endDate: moment().add(7, "d").hour(18).minute(45).toDate(),
	},
];
