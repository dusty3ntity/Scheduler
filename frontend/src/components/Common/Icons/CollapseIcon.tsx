import React from "react";

import { ComponentProps } from "../../../models/components";
import { combineClassNames } from "../../../utils/components/classNames";

import "./icons.scss";

/**
 * Icon name: done-black-24dp
 */
export const CollapseIcon: React.FC<ComponentProps> = ({ id, className, ...props }) => (
	<svg id={id} className={combineClassNames("icon collapse-icon", className)} viewBox="0 0 24 24" {...props}>
		<path d="M0 0h24v24H0V0z" fill="none" />
		<path d="M4 15h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-8h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
	</svg>
);
