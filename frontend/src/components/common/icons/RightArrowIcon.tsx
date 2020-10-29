import React from "react";

import { IComponentProps } from "../../../app/models/components";
import { combineClassNames } from "../../../app/common/util/classNames";

/**
 * Icon name: keyboard_arrow_right-black-18dp
 */
const RightArrowIcon: React.FC<IComponentProps> = ({ id, className, ...props }) => {
	return (
		<svg id={id} className={combineClassNames("icon right-arrow-icon", className)} viewBox="0 0 24 24" {...props}>
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
		</svg>
	);
};

export default RightArrowIcon;
