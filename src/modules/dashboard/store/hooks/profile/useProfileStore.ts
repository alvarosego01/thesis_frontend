import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Session_profileState_I } from '../../reducers/profile/profileSlice';
import { Reducers_I } from "../../../../../core/store/store";


interface useHookStore_I {
    // state: Session_profileState_I;
}
export const useProfileStore = (): useHookStore_I => {

    // const dispatch = useDispatch();

    // const state = useSelector<Reducers_I, Session_profileState_I>(({ session }) => session.profile, shallowEqual);
    const state = null

    return {
        // state
    }
}
