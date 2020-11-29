import moment from "moment";

import { HOUR_CELL_HIGHT } from "../../constants/calendar";
import { EventI } from "../../models/events";
import { getEventDuration } from "../events";

export const getDayEventStyles = (event: EventI): React.CSSProperties => {
	const startDate = moment(event.startDate);

	const eventDuration = getEventDuration(event);
	const eventOffset = startDate.diff(moment(startDate).set({ hour: 0, minute: 0 }), "minutes");

	return {
		height: (eventDuration / 60) * HOUR_CELL_HIGHT,
		top: (eventOffset / 60) * HOUR_CELL_HIGHT,
	};
};

export const getTimeStringByOffset = (offset: number): string => {
	const totalMinutes = Math.floor((offset / HOUR_CELL_HIGHT) * 60);

	const hours = Math.floor(offset / HOUR_CELL_HIGHT);
	const minutes = getRoundedMinutes(totalMinutes - hours * 60);
	const minutesString = minutes === 0 ? "00" : minutes;

	const time = `${hours}:${minutesString}`;
	return time;
};

export const getRoundedMinutes = (minutes: number): number => {
	return Math.floor(minutes / 10) * 10;
};
