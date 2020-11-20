import { Moment } from "moment";

export interface Event {
	title: string;
	startDate: Date;
	endDate: Date;
}

export interface Day {
	date: Date;
	events: Event[];
}

export interface NewEventFormValues {
	date: Moment;
	timeFrom?: string;
}

export interface EventFormFields {
	title: string;
	date: Date;
	timeFrom: string;
	timeTo: string;
}
