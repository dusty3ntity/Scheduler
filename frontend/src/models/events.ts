export interface Event {
	title: string;
	startDate: Date;
	endDate: Date;
}

export interface Day {
	date: Date;
	events: Event[];
}
