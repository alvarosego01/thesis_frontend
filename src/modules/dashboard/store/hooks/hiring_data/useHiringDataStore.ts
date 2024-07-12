
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onRestoreDefault_hiringDataSlice, onSetLoading_hiringDataSlice, onSetHiringData_hiringDataSlice, Slice_hiringDataState_I, onSetPersonal_hiringDataSlice, onSetBankData_hiringDataSlice } from '../../reducers/hiring_data/hiringDataSlice';
import { Reducers_I } from "@store/store";
import { start_delete_user_hiringData_bankData, start_get_user_hiringData, start_get_user_hiringData_payment, start_save_user_hiringData_bankData, start_save_user_hiringData_personal } from "./hiringDataThunks";
import { Payment_Account_I, User_Personal_Data_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { useUiStore } from "../../../../../core/store";
import { useUiGlobals } from "../../../../../core/hooks";

interface useHookStore_I {
    state: Slice_hiringDataState_I;

    emit_clear_user_hiringData: () => void;
    emit_get_user_hiringData: (hiring_data_id: string) => void;
    emit_save_user_hiringData_personal: (hiring_data_id: string, personal: Partial<User_Personal_Data_I>) => void;
    emit_add_bankData: (hiring_data_id: string, bank_data: Partial<Payment_Account_I>) => void;
    emit_delete_bankData: (hiring_data_id: string, index: number) => void;

}

export const useHiringDataStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const {
        emit_swalToast
    } = useUiGlobals()

    const {
        emit_handle_paymentInfoModal,
        emit_handle_delete_bankData_Modal
    } = useUiStore()

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

            emit_swalToast({
                message: 'Información personal guardada',
                type: 'success'
            })


        } catch (error) {


        }
        dispatch(onSetLoading_hiringDataSlice(false))

    }

    const emit_add_bankData = async (hiring_data_id: string, { bank_name, type, number, phone, titular, person_id }: Partial<Payment_Account_I>) => {

        dispatch(onSetLoading_hiringDataSlice(true));

        try {

            let payments_data: Payment_Account_I[] = [...state.hiring_data.payment_accounts!] || [];

            payments_data = payments_data.map((item) => {

                let aux: Payment_Account_I = {
                    bank_name: item.bank_name,
                    person_id: item.person_id,
                    number: item.number,
                    phone: item.phone,
                    titular: item.titular,
                    type: item.type,
                    _id: item._id
                }
                return aux;

            })

            payments_data.push({
                bank_name: bank_name!,
                person_id: person_id!,
                number: number!,
                phone: phone!,
                titular: titular!,
                type: type!,
                _id: ""
            });

            await start_save_user_hiringData_bankData(hiring_data_id, payments_data);

            const new_payment = await start_get_user_hiringData_payment(hiring_data_id);
            if (!new_payment) return;
            dispatch(onSetBankData_hiringDataSlice(new_payment.data!));

            emit_handle_paymentInfoModal({
                status: false,
                type: 'none',
                data: {} as Payment_Account_I
            });

            emit_swalToast({
                message: 'Información guardada',
                type: 'success'
            })


        } catch (error) {
            console.log('error', error);


        }
        dispatch(onSetLoading_hiringDataSlice(false))


    }

    const emit_delete_bankData = async (hiring_data_id: string, index: number) => {

        dispatch(onSetLoading_hiringDataSlice(true));

        try {

            let payments_data: Payment_Account_I[] = [...state.hiring_data.payment_accounts!] || [];

            if (payments_data.length === 0) return;

            let bank_data_id: string = payments_data[index]._id || '';

            await start_delete_user_hiringData_bankData(bank_data_id);

            const new_payment = await start_get_user_hiringData_payment(hiring_data_id);
            if (!new_payment) return;
            dispatch(onSetBankData_hiringDataSlice(new_payment.data!));

            emit_handle_delete_bankData_Modal({
                index: -1,
                status: false
            });

            emit_swalToast({
                message: 'Información eliminada',
                type: 'success'
            })

        } catch (error) {
            console.log('error', error);

        }

        dispatch(onSetLoading_hiringDataSlice(false));

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