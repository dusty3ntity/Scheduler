import React from "react";
import { toast } from "react-toastify";

import { NotificationType } from "./../../models/notifications";
import { Notification } from "./../../components/Common/Notifications/Notification";

export const createNotification = (type: NotificationType, message: string) => {
	toast(React.createElement(Notification, { type, message }));
};
