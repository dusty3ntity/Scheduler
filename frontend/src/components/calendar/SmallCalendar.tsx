import React from "react";
import Calendar from "react-calendar";
import LeftArrowIcon from "../common/icons/LeftArrowIcon";
import RightArrowIcon from "../common/icons/RightArrowIcon";

export interface SmallCalendarProps {
	day: Date;
	onClickDate: (date: Date) => void;
}

const SmallCalendar: React.FC<SmallCalendarProps> = ({ day, onClickDate }) => {
	return (
		<Calendar
			locale="en-US"
			prevLabel={<LeftArrowIcon className="small-calendar-icon" />}
			nextLabel={<RightArrowIcon className="small-calendar-icon" />}
			showNeighboringMonth={false}
			defaultActiveStartDate={day}
			onClickDay={onClickDate}
		/>
	);
};

export default SmallCalendar;
