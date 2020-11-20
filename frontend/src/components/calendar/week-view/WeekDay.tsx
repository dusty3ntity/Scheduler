import React, { useEffect, useRef } from "react";

import { Day, Event } from "../../../models/events";
import EventCard from "./EventCard";

export interface WeekDayProps {
	day: Day;
}

const WeekDay: React.FC<WeekDayProps> = ({ day }) => {
	const dayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClick = (e: MouseEvent): void => {
			const target = e.target as HTMLDivElement;
			if (dayRef.current && dayRef.current.contains(target)) {
				console.log(e.clientY - target.getBoundingClientRect().top);
			}
		};
		document.addEventListener("mousedown", handleClick);
		return (): void => {
			document.removeEventListener("mousedown", handleClick);
		};
	});

	return (
		<div className="week-day" ref={dayRef}>
			{day.events.map((event: Event) => (
				<EventCard key={event.title} event={event} />
			))}
		</div>
	);
};

export default WeekDay;
