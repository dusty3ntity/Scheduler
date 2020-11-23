import React, { useState } from "react";
import moment from "moment";

import { getAllDaysInWeek, getMonthIntervalString } from "../../utils/time";
import { Sidebar } from "./Sidebar";
import { TopPanel } from "./TopPanel";
import { WeekView } from "./Views/WeekView";
import { combineDatesWithEvents } from "../../utils/events";
import { useEventsContext } from "../../contexts/EventsContext";
import { useTimeContext } from "../../contexts/TimeContext";

export const CalendarPage: React.FC = () => {
	const { events } = useEventsContext();
	const { currentTime } = useTimeContext();

	const [viewWeek, setViewWeek] = useState(moment());

	const onToday = (): void => {
		setViewWeek(moment());
	};

	const onPreviousWeek = (): void => {
		const previousWeek = moment(viewWeek).subtract(7, "d");
		setViewWeek(previousWeek);
	};

	const onNextWeek = (): void => {
		const nextWeek = moment(viewWeek).add(7, "d");
		setViewWeek(nextWeek);
	};

	return (
		<div id="calendar-page" className="page">
			<TopPanel
				onToday={onToday}
				onPrev={onPreviousWeek}
				onNext={onNextWeek}
				dateInterval={getMonthIntervalString(viewWeek)}
			/>

			<div className="page-content">
				<Sidebar activeDate={viewWeek} onDayClick={(date: Date): void => setViewWeek(moment(date))} />

				<WeekView
					days={combineDatesWithEvents(getAllDaysInWeek(viewWeek), events)}
					isCurrentWeek={viewWeek.week() === currentTime.week()}
				/>
			</div>
		</div>
	);
};
