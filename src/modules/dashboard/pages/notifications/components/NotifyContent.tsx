
import { FC } from "react";

import { Notification_I } from "@models/Notifications";

interface NotifyContent_Props_I {
    notify: Notification_I
}

export const NotifyContent: FC<NotifyContent_Props_I> = ({
    notify
}) => {
  return (
    <div className="NotifyContent">
        <hr />
        <p className="py-5 text-base">
            {
                notify.contain
            }
        </p>

    </div>
  )
}
