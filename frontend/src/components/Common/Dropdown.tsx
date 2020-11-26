/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from "react";

import { ComponentProps } from "../../models/components";
import { combineClassNames } from "../../utils/components/classNames";
import { CheckIcon } from "./Icons/DropdownIcon";

import "./dropdown.scss";

export interface DropdownProps extends ComponentProps {
	items: any[];
	expanded: boolean;
	onItemClick: (value: any) => void;
	iconVisible?: boolean;

	onOpen: () => void;
	onClose: () => void;

	buttonContent: any;
}

export const Dropdown: React.FC<DropdownProps> = ({
	id,
	className,

	items,
	expanded,
	onItemClick,
	iconVisible,

	onOpen,
	onClose,

	buttonContent,
	...props
}) => {
	const buttonRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent): void => {
			const target = e.target as HTMLElement;
			if (
				menuRef.current &&
				buttonRef.current &&
				!menuRef.current.contains(target) &&
				!buttonRef.current.contains(target)
			) {
				onClose();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);

		return (): void => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [onClose]);

	return (
		<div
			id={id}
			className={combineClassNames("dropdown", className, {
				"dropdown-open": expanded,
				"dropdown-closed": !expanded,
			})}
			{...props}
		>
			<div className="dropdown-button btn" ref={buttonRef} onClick={items.length > 0 ? onOpen : undefined}>
				<div className="button-content-wrapper">
					{buttonContent}

					{iconVisible && <CheckIcon />}
				</div>
			</div>

			<div className="dropdown-menu" ref={menuRef}>
				{items.map((item) => (
					<div className="menu-item" key={item} onClick={(): void => onItemClick(item)}>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};
