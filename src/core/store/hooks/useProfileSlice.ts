import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Session_profileState_I } from '../reducers/session/profile/profileSlice';
import { Core_Reducers_I } from "../store";


interface useHookStore_I {
    state: Session_profileState_I;
}
export const useProfileStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Core_Reducers_I, Session_profileState_I>(({ session }) => session.profile, shallowEqual);

    return {
        state
    }
}
