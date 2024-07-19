import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onLoading_identity_file, onLoading_profesional_file, onRestoreDefault_profileSlice, onSetLoading_profileSlice, onSetProfile_profileSlice, Slice_ProfileState_I } from '../../reducers/profile/profileSlice';
import { Reducers_I } from "../../../../../core/store/store";
import { Profile_I } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { useUiGlobals } from "../../../../../core/hooks";
import { start_get_profile_data, start_set_credentials_identity_file, start_set_credentials_profesional_file, start_update_profile_pic, start_update_user_profile } from "./profileThunks";
import { Slice_userState_I } from "../../reducers/user/userSlice";


interface useHookStore_I {
    state: Slice_ProfileState_I;
    emit_clear_profile: () => void;
    emit_update_user_profile: (profile_id: string, profile: Partial<Profile_I>) => void;
    emit_get_profile_data: (_id: string) => void;
    emit_set_profile_pic: (file: File) => void;
    emit_set_identity_file: (file: File) => void;
    emit_set_profesional_file: (file: File) => void;
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

    const emit_set_identity_file = async (file: File) => {


        dispatch(onLoading_identity_file(true))
        try {

            const { data } = await start_set_credentials_identity_file(file);
            if (!data) return;

            emit_get_profile_data(state_user.user._id);

            emit_swalToast({
                message: 'Credencial de identidad actualizada',
                type: 'success'
            })


        } catch (error) {
            console.log('error', error)

        }
        dispatch(onLoading_identity_file(false))

    }

    const emit_set_profesional_file = async (file: File) => {

        dispatch(onLoading_profesional_file(true))
        try {

            const { data } = await start_set_credentials_profesional_file(file);
            if (!data) return;

            emit_get_profile_data(state_user.user._id);

            emit_swalToast({
                message: 'Constancia profesional actualizada',
                type: 'success'
            })

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onLoading_profesional_file(false))

    }

    const emit_set_profile_pic = async (file: File) => {


        dispatch(onSetLoading_profileSlice(true))
        try {

            const { data } = await start_update_profile_pic(file);
            if (!data) return;

            emit_get_profile_data(state_user.user._id);

            emit_swalToast({
                message: 'Foto de perfil actualizada',
                type: 'success'
            })

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_profileSlice(false))

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
            console.log('error', error)

        }
        dispatch(onSetLoading_profileSlice(false))

    }

    const emit_get_profile_data = async (_id: string) => {

        dispatch(onSetLoading_profileSlice(true))
        try {

            const { data } = await start_get_profile_data(_id);
            if (!data) return false;

            dispatch(onSetProfile_profileSlice(data));

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_profileSlice(false))

    }

    return {
        // params
        state,

        // Methods
        emit_clear_profile,
        emit_set_profile_pic,
        emit_set_identity_file,
        emit_set_profesional_file,
        emit_update_user_profile,
        emit_get_profile_data
    }
}
