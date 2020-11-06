import React from "react";

import { times } from "../../../models/time";
import { HOUR_CELL_HIGHT } from "../../../constants/calendar";

const TimesColumn: React.FC = () => {
	return (
		<div className="times-col">
			{times.map((time) => (
				<span style={{ minHeight: HOUR_CELL_HIGHT }} key={time}>{`${time}:00`}</span>
			))}
		</div>
	);
};

export default TimesColumn;
