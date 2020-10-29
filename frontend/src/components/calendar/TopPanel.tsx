import React from "react";

import Button from "../common/inputs/Button";
import LeftArrowIcon from "../common/icons/LeftArrowIcon";
import RightArrowIcon from "../common/icons/RightArrowIcon";

const TopPanel: React.FC = () => {
	return (
		<div className="top-panel">
			<div className="logo-container">
				<span className="text">Scheduler</span>
			</div>

			<div className="btn-group">
				<Button className="today-btn" text={"Today"} />

				<div className="arrow-buttons">
					<Button className="arrow-btn left-arrow" icon={<LeftArrowIcon />} />
					<Button className="arrow-btn right-arrow" icon={<RightArrowIcon />} />
				</div>
			</div>

			<div className="date-interval">October 2020</div>
		</div>
	);
};

export default TopPanel;
