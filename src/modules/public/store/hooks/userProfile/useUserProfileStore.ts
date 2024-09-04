

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onRestoreDefault_P_userProfileSlice, onSetLoading_P_userProfileSlice, onSetUser_P_userProfileSlice, Slice_P_userProfileState_I } from "../../reducers/userProfileSlice";
import { Reducers_I } from "../../../../../core/store/store";
import { start_getUser_userProfile } from "./useUserProfileThunks";


interface useHookStore_I {

    state: Slice_P_userProfileState_I;

    emit_restore: () => void;
    emit_getUser_userProfile: (_id: string) => void;

}

export const useUserProfileStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Reducers_I, Slice_P_userProfileState_I>(({ publc }) => publc.user_profile, shallowEqual);


    const emit_restore = () => {

        dispatch(onRestoreDefault_P_userProfileSlice())

    }

    const emit_getUser_userProfile = async (_id: string) => {

        dispatch(onSetLoading_P_userProfileSlice(true))
        try {

            const { data } = await start_getUser_userProfile(_id);
            if (!data) return false;

            dispatch(onSetUser_P_userProfileSlice(data));

        } catch (error) {
            console.log('error', error)

            dispatch(onSetUser_P_userProfileSlice(null as any));

        }
        dispatch(onSetLoading_P_userProfileSlice(false))

    }



    return {
        // Attributes
        state,

        // Methods
        emit_restore,
        emit_getUser_userProfile


    }

}