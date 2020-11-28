import React from "react";

import { NotificationType } from "../../../models/notifications";
import { CrossIcon } from "../Icons/CrossIcon";
import { TickIcon } from "../Icons/TickIcon";

import "./notification.scss";

export interface NotificationProps {
  type: NotificationType;
  message: string;
}

export const Notification: React.FC<NotificationProps> = ({ type, message }) => (
    <div className="notification">
      <div className="icon-container">
        {type === NotificationType.Success && <TickIcon />}
        {type === NotificationType.Error && <CrossIcon />}
      </div>

      <div className="content-container">
        <div className="message">{message}</div>
      </div>
    </div>
);