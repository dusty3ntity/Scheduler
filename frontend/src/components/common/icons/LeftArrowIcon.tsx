import React from "react";

import { IComponentProps } from "../../../app/models/components";
import { combineClassNames } from "../../../app/common/util/classNames";

/**
 * Icon name: keyboard_arrow_left-black-18dp
 */
const LeftArrowIcon: React.FC<IComponentProps> = ({ id, className, ...props }) => {
	return (
		<svg id={id} className={combineClassNames("icon left-arrow-icon", className)} viewBox="0 0 24 24" {...props}>
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
		</svg>
	);
};

export default LeftArrowIcon;
