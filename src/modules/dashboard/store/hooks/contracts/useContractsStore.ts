import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onRestoreDefault_contractsSlice, onSetContract_contractsSlice, onSetContracts_contractsSlice, onSetLoading_contractsSlice, Slice_ContractsState_I } from "../../reducers/contracts/contractsSlice";
import { Reducers_I } from "../../../../../core/store/store";
import { useUiGlobals } from "../../../../../core/hooks";
import { start_get_contract, start_get_contracts, start_get_document, start_send_contracProposal, start_set_acceptContract, start_set_contractDetails } from "./contractsThunks";
import { generateContract_V1 } from "../../../../../core/functions/generate_documents";



interface useHookStore_I {

    state: Slice_ContractsState_I;
    emit_restore: () => void;
    emit_get_contract: (_id: string) => void;
    emit_set_contractDetails: (_id: string, payment_id: string) => void;
    emit_send_contracProposal: (_id: string) => void;
    emit_generateDocument: (_id: string) => void;
    emit_get_contracts: () => void;
    emit_set_acceptContract: (_id: string) => void;

}

export const useContractStore = (): useHookStore_I => {


    const dispatch = useDispatch();

    const {
        emit_swalToast
    } = useUiGlobals();

    const state = useSelector<Reducers_I, Slice_ContractsState_I>(({ dashboard }) => dashboard.contracts, shallowEqual);

    // start_get_userMeta

    // onSetLoading_contractsSlice
    // onSetContracts_contractsSlice
    // onSetContract_contractsSlice
    // onRestoreDefault_contractsSlice

    const emit_restore = () => {
        dispatch(onRestoreDefault_contractsSlice());
    }

    const emit_get_contract = async (_id: string) => {

        dispatch(onSetLoading_contractsSlice(true))
        try {

            const { data } = await start_get_contract(_id);
            if (!data) return;

            console.log('contract', data);

            dispatch(onSetContract_contractsSlice(data));

            dispatch(onSetLoading_contractsSlice(false))

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_contractsSlice(false))


    }

    const emit_set_contractDetails = async (_id: string, payment_id: string) => {

        dispatch(onSetLoading_contractsSlice(true))
        try {

            const { data } = await start_set_contractDetails(_id, payment_id);
            if (!data) return;

            // dispatch(onSetContract_contractsSlice(data));

            emit_swalToast({
                type: 'success',
                message: 'Método de pago seleccionado'
            })

            emit_get_contract(_id);

            dispatch(onSetLoading_contractsSlice(false))

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_contractsSlice(false))


    }

    const emit_send_contracProposal = async (_id: string) => {

        dispatch(onSetLoading_contractsSlice(true))
        try {

            const { data } = await start_send_contracProposal(_id);
            // if (!data) return;
            emit_swalToast({
                type: 'success',
                message: 'Propuesta enviada al usuario'
            })

            emit_get_contract(_id);


            dispatch(onSetLoading_contractsSlice(false))

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_contractsSlice(false))

    }

    const emit_generateDocument = async (_id: string) => {

        dispatch(onSetLoading_contractsSlice(true))
        try {

            const { data } = await start_get_document(_id);
            if (!data) return;

            console.log('data', data);

            await generateContract_V1(data.model).then();

            dispatch(onSetLoading_contractsSlice(false))

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_contractsSlice(false))

    }

    const emit_get_contracts = async () => {

        dispatch(onSetLoading_contractsSlice(true))
        try {

            const { data } = await start_get_contracts();
            if (!data) return;

            dispatch(onSetContracts_contractsSlice(data));

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_contractsSlice(false))

    }

    const emit_set_acceptContract = async (_id: string) => {

        dispatch(onSetLoading_contractsSlice(true))
        try {

            const { data } = await start_set_acceptContract(_id);
            // if (!data) return;
            emit_swalToast({
                type: 'success',
                message: 'Contrato aceptado'
            })

            emit_get_contract(_id);

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_contractsSlice(false))

    }

    return {
        // state
        state,

        // methods
        emit_restore,
        emit_get_contract,
        emit_send_contracProposal,
        emit_generateDocument,
        emit_get_contracts,
        emit_set_acceptContract,
        emit_set_contractDetails,
    }

}