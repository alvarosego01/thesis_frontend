import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Session_notificationsState_I, on_DeleteNotification, on_restoreDefault, onSetLoading } from '../reducers/session/notifications/notificationsSlice';
import { Reducers_I } from "../store";


interface useHookStore_I {
    state: Session_notificationsState_I;
    set_loading: (status: boolean) => void;
    deleteNotification: (_id: string) => void;
    restoreState: () => void;
}
export const useNotificationsStore = (): useHookStore_I=> {

    const dispatch = useDispatch();

    const state = useSelector<Reducers_I, Session_notificationsState_I>(({ global }) => global.session.notifications, shallowEqual);

    const set_loading = (status: boolean) => {
        dispatch(onSetLoading(status));
    }

    const deleteNotification = (_id: string) => {
        dispatch(on_DeleteNotification(_id));
    }

    const restoreState = () => {
        dispatch(on_restoreDefault())
    }

    return {
        // State
        state,
        // Methods
        set_loading,
        deleteNotification,
        restoreState,
    }

}
