import React from "react";
import moment from "moment";

import { times } from "../../../models/time";
import { HOUR_CELL_HIGHT } from "../../../constants/calendar";
import Highlighter from "./Highlighter";

export interface TimesColumnProps {
	isHighlighterVisible: boolean;
}

const TimesColumn: React.FC<TimesColumnProps> = ({ isHighlighterVisible }) => {
	return (
		<div className="times-col">
			{isHighlighterVisible && <Highlighter time={moment()} />}

			{times.map((time) => (
				<span style={{ minHeight: HOUR_CELL_HIGHT }} key={time}>{`${time}:00`}</span>
			))}
		</div>
	);
};

export default TimesColumn;
