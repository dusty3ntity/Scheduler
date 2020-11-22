import React from "react";
import moment, { Moment } from "moment";
import Calendar from "react-calendar";

import { LeftArrowIcon } from "./Icons/LeftArrowIcon";
import { RightArrowIcon } from "./Icons/RightArrowIcon";
import { ComponentProps } from "../../models/components";

export interface SmallCalendarProps extends ComponentProps {
	activeDate: Moment;
	onDayClick: (date: Date) => void;
}

export const SmallCalendar: React.FC<SmallCalendarProps> = ({ activeDate, onDayClick, className, ...props }) => (
	<Calendar
		className={className}
		prevLabel={<LeftArrowIcon className="small-calendar-icon" />}
		nextLabel={<RightArrowIcon className="small-calendar-icon" />}
		formatShortWeekday={(_, date): string => moment(date).format("dd")}
		showNeighboringMonth={false}
		minDetail="month"
		defaultActiveStartDate={activeDate.toDate()}
		onClickDay={onDayClick}
		{...props}
	/>
);
