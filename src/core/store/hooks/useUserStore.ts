import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Session_userState_I } from "../reducers/session/user/userSlice";
import { Core_Reducers_I } from "../store";


interface useHookStore_I {
    state: Session_userState_I;
}
export const useUserStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Core_Reducers_I, Session_userState_I>(({ session }) => session.user, shallowEqual);

    return {
        state
    }
}
