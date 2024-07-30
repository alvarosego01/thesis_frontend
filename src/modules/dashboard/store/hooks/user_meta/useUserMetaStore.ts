

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useUiGlobals } from "../../../../../core/hooks";
import { onRestoreDefault_userMetaSlice, onSet_userMeta, onSetLoading_userMetaSlice, Slice_userMetaState_I } from '../../reducers/user_meta/userMetaSlice';
import { Reducers_I } from "../../../../../core/store/store";
import { start_get_userMetaTH, start_set_artistMeta_userMetaTH, start_set_contratistMeta_userMetaTH } from "./userMetaThunks";
import { Update_Meta_Artist_Dto, Update_Meta_Contratist_Dto } from "@tesis-project/dev-globals/dist/modules/profile/dto";


interface useHookStore_I {

    state: Slice_userMetaState_I;

    emit_get_userMeta: () => void;
    emit_save_artistsMeta: (meta: Update_Meta_Artist_Dto) => void;
    emit_save_contratistsMeta: (meta: Update_Meta_Contratist_Dto) => void;
    emit_clear_userMeta: () => void;

}

export const useUserMetaStore = (): useHookStore_I => {


    const dispatch = useDispatch();

    const {
        emit_swalToast
    } = useUiGlobals();

    const state = useSelector<Reducers_I, Slice_userMetaState_I>(({ dashboard }) => dashboard.user_meta, shallowEqual);

    // start_get_userMeta

    const emit_clear_userMeta = () => {
        // return
        dispatch(onRestoreDefault_userMetaSlice());
    }

    const emit_get_userMeta = async () => {

        dispatch(onSetLoading_userMetaSlice(true))
        try {

            const { data } = await start_get_userMetaTH();
            if (!data) return;

            console.log('data', data);

            dispatch(onSet_userMeta(data));

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_userMetaSlice(false))


    }

    const emit_save_artistsMeta = async (meta: Update_Meta_Artist_Dto) => {

          dispatch(onSetLoading_userMetaSlice(true))
        try {

            const { data } = await start_set_artistMeta_userMetaTH(meta);
            if (!data) return;

            emit_get_userMeta();

            emit_swalToast({
                type: 'success',
                message: 'Datos guardados correctamente'
            })

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_userMetaSlice(false))

    }

    const emit_save_contratistsMeta = async ( meta: Update_Meta_Contratist_Dto ) => {

              dispatch(onSetLoading_userMetaSlice(true))
        try {

            const { data } = await start_set_contratistMeta_userMetaTH(meta);
            if (!data) return;

            emit_get_userMeta();

            emit_swalToast({
                type: 'success',
                message: 'Datos guardados correctamente'
            })

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_userMetaSlice(false))

     }


    return {
        // state
        state,

        // methods
        emit_get_userMeta,
        emit_save_artistsMeta,
        emit_save_contratistsMeta,
        emit_clear_userMeta
    }

}