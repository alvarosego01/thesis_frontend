import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Core_Reducers_I } from "../store";
import { Session_authState_I, onLogout } from '../reducers/session/auth/authSlice';

interface useHookStore_I {
    state: Session_authState_I;
    emit_onLogout: () => void;
}
export const useAuthStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Core_Reducers_I, Session_authState_I>(({ session }) => session.auth, shallowEqual);

    const emit_onLogout = () => {
        dispatch(onLogout())
    }

    return {
        //Params
        state,

        //methods
        emit_onLogout
    }
}
