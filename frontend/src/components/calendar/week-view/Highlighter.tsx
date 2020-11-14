import React from "react";
import moment, { Moment } from "moment";

import { HOUR_CELL_HIGHT } from "../../../constants/calendar";

export interface HighlighterProps {
	time: Moment;
}

const Highlighter: React.FC<HighlighterProps> = ({ time }) => {
	const offset = time.diff(moment(time).set({ hour: 0, minute: 0 }), "minutes");
	const styles = {
		top: (offset / 60) * HOUR_CELL_HIGHT,
	};

	return <span className="time-highlighter" style={styles} />;
};

export default Highlighter;
