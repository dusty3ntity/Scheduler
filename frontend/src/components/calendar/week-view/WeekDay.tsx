import React from "react";

import { Day } from "../../../app/models/time";

export interface WeekDayProps {
	day: Day;
}

const WeekDay: React.FC<WeekDayProps> = ({ day }) => {
	return (
		<div className="week-day">
			
		</div>
	);
};

export default WeekDay;
