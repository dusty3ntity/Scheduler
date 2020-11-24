import { Moment } from "moment";

export interface EventI {
	id: string;
	title: string;
	startDate: Date;
	endDate: Date;
}

export interface EventFormValuesI {
	title: string;
	startDate: Date;
	endDate: Date;
}

export interface DayI {
	date: Date;
	events: EventI[];
}

export interface NewEventFormValuesI {
	date: Moment;
	timeFrom: string;
}
