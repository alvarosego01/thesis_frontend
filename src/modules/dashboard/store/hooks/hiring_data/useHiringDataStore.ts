
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onRestoreDefault_hiringDataSlice, onSetLoading_hiringDataSlice, onSetHiringData_hiringDataSlice, Slice_hiringDataState_I, onSetPersonal_hiringDataSlice, onSetBankData_hiringDataSlice, onAddBankData_hiringDataSlice } from '../../reducers/hiring_data/hiringDataSlice';
import { Reducers_I } from "../../../../../core/store/store";
import { start_get_user_hiringData, start_save_user_hiringData_bankData, start_save_user_hiringData_personal } from "./hiringDataThunks";
import { Payment_Account_I, User_Personal_Data_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { on_Handler_delete_PaymentInfoModal, on_Handler_PaymentInfoModal, uiState_I } from "../../../../../core/store/reducers/ui/uiSlice";
import { ConfirmDeleteModal_Props_I } from "../../../pages/hireConfig/components/modals/ConfirmDeleteModal";
import { PaymentInfoModal_Props_I } from "../../../pages/hireConfig/components";


interface useHookStore_I {
    state: Slice_hiringDataState_I;

    emit_clear_user_hiringData: () => void;
    emit_get_user_hiringData: (hiring_data_id: string) => void;
    emit_save_user_hiringData_personal: (hiring_data_id: string, personal: Partial<User_Personal_Data_I>) => void;
    emit_add_bankData: (hiring_data_id: string, bank_data: Partial<Payment_Account_I>) => void;
    emit_delete_bankData: (index: number) => void;

}

export const useHiringDataStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Reducers_I, Slice_hiringDataState_I>(({ dashboard }) => dashboard.hiring_data, shallowEqual);
    const uiSlice_state = useSelector<Reducers_I, uiState_I>(({ global }) => global.ui, shallowEqual);

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

    const emit_save_bankData = () => {
        return
    }

    const emit_add_bankData = async (hiring_data_id: string, { bank_name, type, number, phone, titular, person_id }: Partial<Payment_Account_I>) => {

        dispatch(onSetLoading_hiringDataSlice(true));
        try {

            let payments_data: Payment_Account_I[] = [...state.hiring_data.payment_accounts!] || [];
            payments_data.push({
                bank_name: bank_name!,
                person_id: person_id!,
                number: number!,
                phone: phone!,
                titular: titular!,
                type: type!,
                _id: "",
                created_at: new Date() as any,
                updated_at: new Date() as any
            });

            const { data } = await start_save_user_hiringData_bankData(hiring_data_id, payments_data);
            if (!data) return;

            console.log('data respuesta', data);


        } catch (error) {


        }
        dispatch(onSetLoading_hiringDataSlice(false))


    }

    const emit_delete_bankData = (index: number) => {


    }



    return {
        // Params
        state,

        // Methods
        emit_clear_user_hiringData,
        emit_get_user_hiringData,
        emit_save_user_hiringData_personal,
        emit_add_bankData,
        emit_delete_bankData,
    }

}