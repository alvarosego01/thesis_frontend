import { ComponentProps, FC, useEffect, useState } from "react"
import { TabsCollapse } from "@components/index"
import { ContentPage_Box_LY } from "@modules/dashboard/Layouts"
import { NotifyContent, NotifyHeader } from "."
import { useNotificationsStore } from "../../../../core/store/hooks/notifications/useNotificationsStore"

const Page = () => {

    const [isMounted, setisMounted] = useState(false);

    const {
        state: {
            notifications
        },
        emit_deleteNotification,
        // emit_getNotifications
    } = useNotificationsStore();

    const onDelete_Notify = (_id: string) => {
        emit_deleteNotification(_id);
    }

    const notifies_collapse = () => {

        let tabs = [];

        for (const [i, item] of notifications.entries()) {

            const data_collapse: ComponentProps<typeof TabsCollapse> = {
                tabs: [
                    {
                        title: item.subject,
                        icon: {
                            type: "icon",
                            content: "bx bxs-megaphone"
                        },
                        extra_header: <NotifyHeader date={item.created_at!} onDelete={() => onDelete_Notify(item._id)} />,
                        children: <NotifyContent {...item} />
                    }
                ]
            }

            tabs.push(<TabsCollapse key={i} {...data_collapse} />);

        }

        return tabs;

    }

    useEffect(() => {

        if (isMounted === false) return;
        // emit_getNotifications();

    }, [isMounted])

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <div className="w-full space-y-4">
            {
                (notifications.length > 0) ? (
                    notifies_collapse()
                ) : (
                    <div className='flex flex-col items-center justify-center w-full space-y-2'>
                        <i className='text-3xl bx bx-loader-alt bx-spin' ></i>
                        <h1 className='w-full text-xl font-bold text-center'>
                            Cargando...
                        </h1>
                    </div>
                )
            }
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