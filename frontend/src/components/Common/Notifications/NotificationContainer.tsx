import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

export const NotificationContainer = () => (
	<ToastContainer
		position="top-center"
		limit={2}
		draggable={false}
		hideProgressBar
		closeOnClick={false}
		autoClose={3000}
	/>
);
