import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onRestoreDefault_profileSlice, onSetLoading_profileSlice, onSetProfile_profileSlice, Slice_ProfileState_I } from '../../reducers/profile/profileSlice';
import { Reducers_I } from "../../../../../core/store/store";
import { Profile_I } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { useUiGlobals } from "../../../../../core/hooks";
import { start_get_profile_data, start_update_user_profile } from "./profileThunks";
import { Slice_userState_I } from "../../reducers/user/userSlice";


interface useHookStore_I {
    state: Slice_ProfileState_I;
    emit_clear_profile: () => void;
    emit_update_user_profile: (profile_id: string, profile: Partial<Profile_I>) => void;
    emit_get_profile_data: () => Promise<boolean>;
}
export const useProfileStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const {
        emit_swalToast
    } = useUiGlobals();


    const state = useSelector<Reducers_I, Slice_ProfileState_I>(({ dashboard }) => dashboard.profile, shallowEqual);
    const state_user = useSelector<Reducers_I, Slice_userState_I>(({ dashboard }) => dashboard.user, shallowEqual);


    const emit_clear_profile = () => {

        dispatch(onRestoreDefault_profileSlice())

    }


    const emit_update_user_profile = async (profile_id: string, profile: Partial<Profile_I>) => {

        dispatch(onSetLoading_profileSlice(true))
        try {

            const { data } = await start_update_user_profile(profile_id, profile);
            if (!data) return;

            dispatch(onSetProfile_profileSlice(data));

            emit_swalToast({
                message: 'Información profesional actualizada',
                type: 'success'
            })

        } catch (error) {

        }
        dispatch(onSetLoading_profileSlice(false))


    }

    const emit_get_profile_data = async (): Promise<boolean> => {

           dispatch(onSetLoading_profileSlice(true))
        try {

            const { data } = await start_get_profile_data(state.profile._id || state_user.user._id);
            if (!data) return false;

            dispatch(onSetProfile_profileSlice(data));


        } catch (error) {


        }
        dispatch(onSetLoading_profileSlice(false))
            return true;



    }


    return {
        // params
        state,


        // Methods
        emit_clear_profile,
        emit_update_user_profile,
        emit_get_profile_data
    }
}
