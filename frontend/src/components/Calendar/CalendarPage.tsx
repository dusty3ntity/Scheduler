import React, { useState } from "react";
import moment from "moment";

import { useEventsContext } from "../../contexts/EventsContext";
import { useLocaleContext } from "../../contexts/LocaleContext";
import { useTimeContext } from "../../contexts/TimeContext";
import { combineDatesWithEvents } from "../../utils/events";
import { getDaysArray, getThreeDaysViewIntervalString, getWeekViewIntervalString } from "../../utils/time";
import { Sidebar } from "./Sidebar";
import { TopPanel } from "./TopPanel";
import { ThreeDaysView } from "./Views/ThreeDaysView";
import { WeekView } from "./Views/WeekView";

import "./calendar-page.scss";

export const CalendarPage: React.FC = () => {
	const { events } = useEventsContext();
	const { currentTime } = useTimeContext();
	const { locale } = useLocaleContext();

	const [viewDate, setViewDate] = useState(currentTime);
	const [isWeekView, setIsWeekView] = useState(true);

	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const onTodayButtonClick = (): void => {
		setViewDate(currentTime);
	};

	const onPrevButtonClick = (): void => {
		const daysToSubtract = isWeekView ? 7 : 3;
		const newDate = moment(viewDate).subtract(daysToSubtract, "d");
		setViewDate(newDate);
	};

	const onNextButtonClick = (): void => {
		const daysToAdd = isWeekView ? 7 : 3;
		const newDate = moment(viewDate).add(daysToAdd, "d");
		setViewDate(newDate);
	};

	return (
		<div id="calendar-page" className="page">
			<TopPanel
				onSidebarCollapse={() => {
					setIsSidebarOpen((value) => !value);
				}}
				onToday={onTodayButtonClick}
				onPrev={onPrevButtonClick}
				onNext={onNextButtonClick}
				dateInterval={
					isWeekView
						? getWeekViewIntervalString(viewDate, locale)
						: getThreeDaysViewIntervalString(viewDate, locale)
				}
				onViewSwitch={() => {
					setIsWeekView((value) => !value);
				}}
				isWeekView={isWeekView}
			/>

			<div className="page-content">
				<Sidebar onDayClick={(date: Date): void => setViewDate(moment(date))} isOpen={isSidebarOpen} />

				{isWeekView && (
					<WeekView
						days={combineDatesWithEvents(getDaysArray(moment(viewDate).startOf("isoWeek"), 7), events)}
						isCurrentWeek={viewDate.isSame(currentTime, "week")}
					/>
				)}

				{!isWeekView && (
					<ThreeDaysView
						days={combineDatesWithEvents(getDaysArray(viewDate, 3), events)}
						isCurrentWeek={viewDate.isSame(currentTime, "week")}
					/>
				)}
			</div>
		</div>
	);
};
