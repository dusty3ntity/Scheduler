import React from "react";
import moment from "moment";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

import { LeftArrowIcon } from "./Icons/LeftArrowIcon";
import { RightArrowIcon } from "./Icons/RightArrowIcon";
import { ComponentProps } from "../../models/components";

import "./small-calendar.scss";

export interface SmallCalendarProps extends ComponentProps {
	defaultValue?: Date;
	onDayClick: (date: Date) => void;
}

export const SmallCalendar: React.FC<SmallCalendarProps> = ({ defaultValue, onDayClick, className, ...props }) => (
	<Calendar
		className={className}
		prevLabel={<LeftArrowIcon className="small-calendar-icon" />}
		nextLabel={<RightArrowIcon className="small-calendar-icon" />}
		formatShortWeekday={(_, date): string => moment(date).format("dd")}
		showNeighboringMonth={false}
		minDetail="month"
		defaultValue={defaultValue}
		onClickDay={onDayClick}
		{...props}
	/>
);
