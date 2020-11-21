import React from "react";
import moment, {Moment} from "moment";
import Calendar from "react-calendar";

import {LeftArrowIcon} from "../icons/LeftArrowIcon";
import {RightArrowIcon} from "../icons/RightArrowIcon";

export interface SmallCalendarProps {
	activeDate: Moment;
	onDayClick: (date: Date) => void;
}

export const SmallCalendar: React.FC<SmallCalendarProps> = ({activeDate, onDayClick}) => (
	<Calendar
		prevLabel={<LeftArrowIcon className="small-calendar-icon"/>}
		nextLabel={<RightArrowIcon className="small-calendar-icon"/>}
		formatShortWeekday={(_, date): string => moment(date).format("dd")}
		showNeighboringMonth={false}
		minDetail="month"
		defaultActiveStartDate={activeDate.toDate()}
		onClickDay={onDayClick}
	/>
);