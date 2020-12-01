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
	const [isThreeDaysView, setIsThreeDaysView] = useState(
		localStorage.getItem("isThreeDaysView") === "true" ? true : false
	);

	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(
		localStorage.getItem("isSidebarCollapsed") === "true" ? true : false
	);

	const handleSidebarButtonClick = () => {
		localStorage.setItem("isSidebarCollapsed", !isSidebarCollapsed + "");
		setIsSidebarCollapsed(!isSidebarCollapsed);
	};

	const handleCalendarViewSwitch = () => {
		localStorage.setItem("isThreeDaysView", !isThreeDaysView + "");
		setIsThreeDaysView(!isThreeDaysView);
	};

	const onTodayButtonClick = (): void => {
		setViewDate(currentTime);
	};

	const onPrevButtonClick = (): void => {
		const daysToSubtract = isThreeDaysView ? 3 : 7;
		const newDate = moment(viewDate).subtract(daysToSubtract, "d");
		setViewDate(newDate);
	};

	const onNextButtonClick = (): void => {
		const daysToAdd = isThreeDaysView ? 3 : 7;
		const newDate = moment(viewDate).add(daysToAdd, "d");
		setViewDate(newDate);
	};

	return (
		<div id="calendar-page" className="page">
			<TopPanel
				onSidebarCollapse={handleSidebarButtonClick}
				onToday={onTodayButtonClick}
				onPrev={onPrevButtonClick}
				onNext={onNextButtonClick}
				dateInterval={
					isThreeDaysView
						? getThreeDaysViewIntervalString(viewDate, locale)
						: getWeekViewIntervalString(viewDate, locale)
				}
				onViewSwitch={handleCalendarViewSwitch}
				isWeekView={!isThreeDaysView}
			/>

			<div className="page-content">
				<Sidebar onDayClick={(date: Date): void => setViewDate(moment(date))} isOpen={!isSidebarCollapsed} />

				{!isThreeDaysView && (
					<WeekView
						days={combineDatesWithEvents(getDaysArray(moment(viewDate).startOf("isoWeek"), 7), events)}
						isCurrentWeek={viewDate.isSame(currentTime, "week")}
					/>
				)}

				{isThreeDaysView && (
					<ThreeDaysView
						days={combineDatesWithEvents(getDaysArray(viewDate, 3), events)}
						isCurrentWeek={viewDate.isSame(currentTime, "week")}
					/>
				)}
			</div>
		</div>
	);
};
