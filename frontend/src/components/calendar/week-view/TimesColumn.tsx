import React from "react";

import { times } from "../../../models/time";
import { HOUR_CELL_HIGHT } from "../../../constants/calendar";
import Highlighter from "./Highlighter";
import moment from "moment";

const TimesColumn: React.FC = () => {
	return (
		<div className="times-col">
			<Highlighter time={moment()}/>
			{times.map((time) => (

				<span style={{ minHeight: HOUR_CELL_HIGHT }} key={time}>{`${time}:00`}</span>
			))}
		</div>
	);
};

export default TimesColumn;
