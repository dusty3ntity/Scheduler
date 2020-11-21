import React, {useEffect, useRef} from "react";
import moment from "moment";
import {useHistory} from "react-router-dom";

import {Day, Event} from "../../../models/events";
import {EventCard} from "./EventCard";
import {HOUR_CELL_HIGHT} from "../../../constants/calendar";

export interface WeekDayProps {
	day: Day;
}

export const WeekDay: React.FC<WeekDayProps> = ({day}) => {
	const dayRef = useRef<HTMLDivElement>(null);
	const history = useHistory();

	useEffect(() => {
		const handleClick = (e: MouseEvent): void => {
			countEvent(e);
		};

		document.addEventListener("mousedown", handleClick);
		return (): void => {
			document.removeEventListener("mousedown", handleClick);
		};
	});
	const countEvent = (e: MouseEvent): void => {
		const target = e.target as HTMLDivElement;
		if (dayRef.current && dayRef.current.contains(target)) {
			const offset = e.clientY - target.getBoundingClientRect().top;
			const totalMinutes = Math.floor((offset / HOUR_CELL_HIGHT) * 60);
			const hours = Math.floor(offset / HOUR_CELL_HIGHT);
			const minutes = Math.floor((totalMinutes - hours * 60) / 10) * 10;
			const minutesString = minutes === 0 ? "00" : minutes;
			const time = `${hours}:${minutesString}`;
			const date = moment(day.date).format("DD-MM-YYYY");
			history.push(`/create-event?date=${date}&time=${time}`);
		}
	};
	return (
		<div className="week-day" ref={dayRef}>
			{day.events.map((event: Event) => (
				<EventCard key={event.title} event={event}/>
			))}
		</div>
	);
};
