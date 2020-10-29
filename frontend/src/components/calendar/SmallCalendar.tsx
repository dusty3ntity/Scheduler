import React from "react";
import Calendar from "react-calendar";
import LeftArrowIcon from "../common/icons/LeftArrowIcon";
import RightArrowIcon from "../common/icons/RightArrowIcon";

const SmallCalendar: React.FC = () => {
	return (
		<Calendar
			locale="en-US"
			prevLabel={<LeftArrowIcon className="small-calendar-icon" />}
			nextLabel={<RightArrowIcon className="small-calendar-icon" />}
			showNeighboringMonth={false}
		/>
	);
};

export default SmallCalendar;
