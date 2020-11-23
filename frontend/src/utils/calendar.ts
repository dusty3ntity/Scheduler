import moment from "moment";

import { HOUR_CELL_HIGHT } from "../constants/calendar";
import { EventI } from "../models/events";

export const getDayEventStyles = (event: EventI): React.CSSProperties => {
	const startDate = moment(event.startDate);
	const endDate = moment(event.endDate);

	const eventDuration = endDate.diff(startDate, "minutes");
	const eventOffset = startDate.diff(moment(startDate).set({ hour: 0, minute: 0 }), "minutes");

	return {
		height: (eventDuration / 60) * HOUR_CELL_HIGHT,
		top: (eventOffset / 60) * HOUR_CELL_HIGHT,
	};
};
