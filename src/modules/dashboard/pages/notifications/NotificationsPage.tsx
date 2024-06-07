import { ComponentProps, FC } from "react"
import { TabsCollapse } from "@components/index"
import { Notification_I } from "@models/Notifications"
import { ContentPage_Box_LY } from "@modules/dashboard/Layouts"
import { NotifyContent, NotifyHeader } from "."
import { SecondaryButton } from '../../../../core/components/buttons/SecondaryButton';
import { useNotificationsStore } from "../../../../core/store/hooks/useNotificationsStore"





const Page = () => {

    const {
        state: {
            notifications
        },
        deleteNotification
    } = useNotificationsStore();

    const onDelete_Notify = (_id: string) => {
        deleteNotification(_id);
    }

    const notifies_collapse = () => {

        let tabs = [];

        for (const [i, item] of notifications.entries()) {

            const data_collapse: ComponentProps<typeof TabsCollapse> = {
                tabs: [
                    {
                        title: item.title,
                        icon: {
                            type: "icon",
                            content: "bx bxs-megaphone"
                        },
                        extra_header: <NotifyHeader date={item.date} onDelete={() => onDelete_Notify(item._id)} />,
                        children: <NotifyContent notify={item} />
                    }
                ]
            }

            tabs.push(<TabsCollapse key={i} {...data_collapse} />);

        }

        return tabs;

    }

    return (
        <div className="w-full space-y-4">
            {notifies_collapse()}
        </div>
    )

}

export const NotificationsPage: FC = () => {
    return (
        <ContentPage_Box_LY
            title="Notificaciones"
            children={Page()} />
    )
}


export default NotificationsPage