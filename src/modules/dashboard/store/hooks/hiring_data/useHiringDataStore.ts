
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onRestoreDefault_hiringDataSlice, onSetLoading_hiringDataSlice, onSetHiringData_hiringDataSlice, Slice_hiringDataState_I, onSetPersonal_hiringDataSlice } from '../../reducers/hiring_data/hiringDataSlice';
import { Reducers_I } from "../../../../../core/store/store";
import { Slice_userState_I } from "../../reducers/user/userSlice";
import { start_get_user_hiringData, start_save_user_hiringData_personal } from "./hiringDataThunks";
import { User_HiringData_I, User_Personal_Data_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";


interface useHookStore_I {
    state: Slice_hiringDataState_I;

    emit_clear_user_hiringData: () => void;
    emit_get_user_hiringData: (hiring_data_id: string) => void;
    emit_save_user_hiringData_personal: (hiring_data_id: string, personal: Partial<User_Personal_Data_I>) => void;
}

export const useHiringDataStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Reducers_I, Slice_hiringDataState_I>(({ dashboard }) => dashboard.hiring_data, shallowEqual);

    const emit_clear_user_hiringData = () => {

        dispatch(onRestoreDefault_hiringDataSlice())

    }

    const emit_get_user_hiringData = async (hiring_data_id: string) => {

        dispatch(onSetLoading_hiringDataSlice(true))
        try {

            const { data } = await start_get_user_hiringData(hiring_data_id);
            if (!data) return;

            dispatch(onSetHiringData_hiringDataSlice(data));

        } catch (error) {


        }
        dispatch(onSetLoading_hiringDataSlice(false))

    }

    const emit_save_user_hiringData_personal = async (hiring_data_id: string, personal: Partial<User_Personal_Data_I>) => {

        dispatch(onSetLoading_hiringDataSlice(true))
        try {


            const { data } = await start_save_user_hiringData_personal(hiring_data_id, personal);
            if (!data) return;

            dispatch(onSetPersonal_hiringDataSlice({
                ...data
            }));

        } catch (error) {


        }
        dispatch(onSetLoading_hiringDataSlice(false))


    }

    return {
        // Params
        state,

        // Methods
        emit_clear_user_hiringData,
        emit_get_user_hiringData,
        emit_save_user_hiringData_personal
    }

}