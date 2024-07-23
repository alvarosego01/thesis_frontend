import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Session_notificationsState_I, on_DeleteNotification, on_restoreDefault, onSetLoading, onSet_notifications } from '../../reducers/session/notifications/notificationsSlice';
import { Reducers_I } from "../../store";
import { start_deleteNotification_notificationsTH, start_getNotifications_notificationsTH } from "./notificationsThunks";


interface useHookStore_I {
    state: Session_notificationsState_I;
    set_loading: (status: boolean) => void;
    emit_deleteNotification: (_id: string) => void;
    restoreState: () => void;
    emit_getNotifications: () => void;
}
export const useNotificationsStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Reducers_I, Session_notificationsState_I>(({ global }) => global.session.notifications, shallowEqual);

    const set_loading = (status: boolean) => {
        dispatch(onSetLoading(status));
    }

    const emit_deleteNotification = async (_id: string) => {
        // dispatch(onSetLoading(true));

        try {

            const { data } = await start_deleteNotification_notificationsTH(_id);
            if (!data) return;

            dispatch(on_DeleteNotification(_id));

            // dispatch(onSetLoading(false));

        } catch (error) {

            // dispatch(onSetLoading(false));

        }

    }

    const restoreState = () => {
        dispatch(on_restoreDefault())
    }

    const emit_getNotifications = async () => {

        dispatch(onSetLoading(true));

        try {

            const { data } = await start_getNotifications_notificationsTH();
            if (!data) return;

            dispatch(onSet_notifications(data));

            dispatch(onSetLoading(false));

        } catch (error) {

            dispatch(onSetLoading(false));

        }

    }



    return {
        // State
        state,
        // Methods
        set_loading,
        emit_getNotifications,
        emit_deleteNotification,
        restoreState,
    }

}
