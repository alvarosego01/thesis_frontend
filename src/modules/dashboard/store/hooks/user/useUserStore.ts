import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Reducers_I } from "../../../../../core/store/store";
import { onRestoreDefault_userSlice, onSetLoading_userSlice, onSetUser_userSlice, Slice_userState_I } from "../../reducers/user/userSlice";
import { start_get_sessionUser_userTH, start_save_user_data } from "../../../../../core/store";
import { User_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { useUiGlobals } from "../../../../../core/hooks";
import { onRestoreDefault_hiringDataSlice } from "../../reducers/hiring_data/hiringDataSlice";

interface useHookStore_I {
    state: Slice_userState_I;
    emit_save_user_data: (user_id: string, user: Partial<User_I>) => void;
    emit_get_user: (user_id: string) => void;
    emit_clear_user: () => void;
}
export const useUserStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const {
        emit_swalToast
    } = useUiGlobals();

    const state = useSelector<Reducers_I, Slice_userState_I>(({ dashboard }) => dashboard.user, shallowEqual);

    const emit_clear_user = () => {

        dispatch(onRestoreDefault_userSlice());
        dispatch(onRestoreDefault_hiringDataSlice());

    }

    const emit_save_user_data = async (user_id: string, user: Partial<User_I>) => {

           dispatch(onSetLoading_userSlice(true))
        try {

            const { data } = await start_save_user_data(user_id, user);
            if (!data) return;

            dispatch(onSetUser_userSlice(data));

            emit_swalToast({
                message: 'Información actualizada',
                type: 'success'
            })

        } catch (error) {


        }
        dispatch(onSetLoading_userSlice(false))


    }

    const emit_get_user = async (user_id: string) => {

        dispatch(onSetLoading_userSlice(true))
        try {

            const { data } = await start_get_sessionUser_userTH(user_id);
            if (!data) return;

            dispatch(onSetUser_userSlice(data));

        } catch (error) {


        }
        dispatch(onSetLoading_userSlice(false))

    }

    return {
        // Params
        state,

        // methods
        emit_get_user,
        emit_save_user_data,
        emit_clear_user
    }
}
