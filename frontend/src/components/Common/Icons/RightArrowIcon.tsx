import React from "react";

import { ComponentProps } from "../../../models/components";
import { combineClassNames } from "../../../utils/components/classNames";

import "./icons.scss";

/**
 * Icon name: keyboard_arrow_right-24px
 */
export const RightArrowIcon: React.FC<ComponentProps> = ({ id, className, ...props }) => (
	<svg id={id} className={combineClassNames("icon right-arrow-icon", className, "dark-background", "arrow-icon")} viewBox="0 0 24 24" {...props}>
		<path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" />
	</svg>
);
