import React, {useContext, useState} from "react";
import moment from "moment";

import { getAllDaysInWeek, getMonthIntervalString } from "../../utils/time";
import { Sidebar } from "./Sidebar";
import { TopPanel } from "./TopPanel";
import { WeekView } from "./Views/WeekView";
import { combineDatesWithEvents } from "../../utils/events";
import {EventsContext} from "../../contexts/EventsContext";

export const CalendarPage: React.FC = () => {
	const [currentWeek, setCurrentWeek] = useState(moment());
	const {events} = useContext(EventsContext);

	const onToday = (): void => {
		setCurrentWeek(moment());
	};

	const onPreviousWeek = (): void => {
		const previousWeek = moment(currentWeek).subtract(7, "d");
		setCurrentWeek(previousWeek);
	};

	const onNextWeek = (): void => {
		const nextWeek = moment(currentWeek).add(7, "d");
		setCurrentWeek(nextWeek);
	};

	return (
		<div id="calendar-page" className="page">
			<TopPanel
				onToday={onToday}
				onPrev={onPreviousWeek}
				onNext={onNextWeek}
				dateInterval={getMonthIntervalString(currentWeek)}
			/>

			<div className="page-content">
				<Sidebar activeDate={currentWeek} onDayClick={(date: Date): void => setCurrentWeek(moment(date))} />

				<WeekView
					days={combineDatesWithEvents(getAllDaysInWeek(currentWeek), events)}
					isCurrentWeek={currentWeek.week() === moment().week()}
				/>
			</div>
		</div>
	);
};
