
import { FC } from "react";

import { Notification_I } from "@models/Notifications";
import { Notifications_I } from "@tesis-project/dev-globals/dist/modules/notifications/interfaces";


export const NotifyContent: FC<Notifications_I> = ({
    ...props
}) => {
  return (
    <div className="NotifyContent">
        <hr />
        <p className="py-5 text-base">
            {
                props.message
            }
        </p>

    </div>
  )
}
