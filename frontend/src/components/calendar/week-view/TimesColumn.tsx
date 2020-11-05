import React from "react";

import { times } from "../../../app/models/time";

const TimesColumn: React.FC = () => {
	return (
		<div className="times-col">
			{times.map((time) => (
				<span key={time}>{`${time}:00`}</span>
			))}
		</div>
	);
};

export default TimesColumn;
