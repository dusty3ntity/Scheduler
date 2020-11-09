import React, { useState } from "react";
import moment from "moment";

import { getAllDaysInWeek, getMonthIntervalString } from "../../utils/time";
import Sidebar from "./Sidebar";
import TopPanel from "./TopPanel";
import WeekView from "./week-view/WeekView";
import { testEvents } from "../../__mocks__/events";
import { combineDatesWithEvents } from "../../utils/events";

const CalendarPage: React.FC = () => {
	const [currentWeek, setCurrentWeek] = useState(moment());

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
				<Sidebar
					defaultDay={currentWeek.toDate()}
					onClickDate={(date: Date): void => setCurrentWeek(moment(date))}
				/>

				<WeekView days={combineDatesWithEvents(getAllDaysInWeek(currentWeek), testEvents)} />
			</div>
		</div>
	);
};

export default CalendarPage;
