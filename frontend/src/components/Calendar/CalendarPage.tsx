import React, {useState} from "react";
import moment from "moment";

import {getAllDaysInWeek, getThreeDaysInWeek, getMonthIntervalString} from "../../utils/time";
import {Sidebar} from "./Sidebar";
import {TopPanel} from "./TopPanel";
import {WeekView} from "./Views/WeekView";
import {ThreeDaysView} from "./Views/ThreeDaysView";
import {combineDatesWithEvents} from "../../utils/events";
import {useEventsContext} from "../../contexts/EventsContext";
import {useTimeContext} from "../../contexts/TimeContext";

import "./calendar-page.scss";

export const CalendarPage: React.FC = () => {
	const {events} = useEventsContext();
	const {currentTime} = useTimeContext();

	const [viewWeek, setViewWeek] = useState(moment());
	const [isWeekView, setIsWeekView] = useState(true);

	const onToday = (): void => {
		setViewWeek(moment());
	};

	const onPreviousWeek = (): void => {
		const previousWeek = moment(viewWeek).subtract(isWeekView ? 7 : 3, "d");
		setViewWeek(previousWeek);
	};

	const onNextWeek = (): void => {
		const nextWeek = moment(viewWeek).add(isWeekView ? 7 : 3, "d");
		setViewWeek(nextWeek);
	};

	return (
		<div id="calendar-page" className="page">
			<TopPanel
				onToday={onToday}
				onPrev={onPreviousWeek}
				onNext={onNextWeek}
				dateInterval={getMonthIntervalString(viewWeek)}
				onViewSwitch={(): void => {
					setIsWeekView((value) => !value);
				}}
				isWeekView={isWeekView}
			/>

			<div className="page-content">
				<Sidebar activeDate={viewWeek} onDayClick={(date: Date): void => setViewWeek(moment(date))}/>

				{isWeekView && <WeekView
                    days={combineDatesWithEvents(getAllDaysInWeek(viewWeek), events)}
                    isCurrentWeek={viewWeek.week() === currentTime.week()}
                />}{
				!isWeekView && < ThreeDaysView
                    days={combineDatesWithEvents(getThreeDaysInWeek(viewWeek), events)}
                    isCurrentWeek={viewWeek.week() === currentTime.week()}
                />}
			</div>
		</div>
	);
};
