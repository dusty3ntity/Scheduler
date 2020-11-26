import React from "react";

import { ComponentProps } from "../../../models/components";
import { combineClassNames } from "../../../utils/components/classNames";

import "./icons.scss";

/**
 * Icon name: done-black-24dp
 */
export const TickIcon: React.FC<ComponentProps> = ({ id, className, ...props }) => (
	<svg id={id} className={combineClassNames("icon tick-icon", className)} viewBox="0 0 24 24" {...props}>
		<path d="M0 0h24v24H0V0z" fill="none" />
		<path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z" />
	</svg>
);
