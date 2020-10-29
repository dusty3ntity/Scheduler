import React, { useState } from "react";
import Calendar from "react-calendar";
import { BsPlusCircle } from "react-icons/bs";
import 'react-calendar/dist/Calendar.css';
import Button from "../common/inputs/Button";

const Sidebar: React.FC = () => {
	const [date, setDate] = useState<Date>();
	return (
		<div id="sideBar">
			<button className = {"sideBar-button"}>
				<BsPlusCircle className={"icon-plus"} /> Add event
			</button>
			<Calendar onChange={()=>setDate(date)} value={date} locale = "US" />
		</div>
	);
};

export default Sidebar;
