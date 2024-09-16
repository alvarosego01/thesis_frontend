import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onRestoreDefault_P_vacantsPageSlice, onSetLoading_P_vacantsPageSlice, onSetVacant_P_vacantsPageSlice, onSetVacants_P_vacantsPageSlice, Slice_P_vacantsPageSlice } from "../../reducers/vacantsPageSlice";
import { Reducers_I } from "../../../../../core/store/store";
import { Vacant_I, Vacant_Postulation_Status_Enum } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";
import { start_createPlanningContract, start_createPostulation, start_createVacant_vacantPage, start_deletePostulation, start_evaluatePostulation, start_getOnePublication, start_getOwnPublicVacants_vacantPage, start_getPostulationsByVacant, start_getPublicVacants_vacantPage } from "./vacantsPageThunks";
import { Artist_Enum } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { useUiStore } from "../../../../../core/store";
import { useUiGlobals } from "../../../../../core/hooks";
import { User_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { useNavigate } from "react-router-dom";

interface useHookStore_I {

    state: Slice_P_vacantsPageSlice;

    emit_restore: () => void;
    emit_createVacant: (vacant: Vacant_I) => void;
    emit_getPublicVacants_vacantPage: (type: Artist_Enum) => void;
    emit_getOnePublication_VacantPage: (_id: string) => void;
    emit_createPostulation: (vacant_id: string, comment?: string) => void;
    emit_isAlreadyPostulated: (user_id: string) => boolean;
    emit_getOwnPublicVacants_vacantPage: () => void;
    emit_evaluatePostulation: (vacant_id: string, postulation_id: string, status: Vacant_Postulation_Status_Enum, comment?: string) => void;
    emit_deletePostulation: (vacant_id: string, postulation_id: string) => void;
    emit_createPlanningContract: (postulation_id: string) => void;

}

export const useVacantPageStore = (): useHookStore_I => {

    const {
        emit_handle_vacantModal,
        emit_handle_postulationVacantModal,
        emit_handleEvaluatePostulationModal
    } = useUiStore();

    const {
        emit_swalToast
    } = useUiGlobals()

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const state = useSelector<Reducers_I, Slice_P_vacantsPageSlice>(({ publc }) => publc.vacants_page, shallowEqual);

    const emit_createVacant = async (vacant: Vacant_I) => {

        dispatch(onSetLoading_P_vacantsPageSlice(true))
        try {

            const { data } = await start_createVacant_vacantPage(vacant);
            if (!data) return false;

            emit_getPublicVacants_vacantPage(Artist_Enum.ALL);

            emit_handle_vacantModal({
                status: false,
                vacant_id: ''
            })

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_P_vacantsPageSlice(false))

    }

    const emit_getPublicVacants_vacantPage = async (type: Artist_Enum) => {

        dispatch(onSetLoading_P_vacantsPageSlice(true));
        console.log('entra');
        try {

            const { data } = await start_getPublicVacants_vacantPage(type);
            // if (!data) return false;

            dispatch(onSetVacants_P_vacantsPageSlice(data || []));

        } catch (error) {
            console.log('error', error)

        }
        console.log('sale')
        dispatch(onSetLoading_P_vacantsPageSlice(false))

    }

    const emit_getOwnPublicVacants_vacantPage = async () => {

        dispatch(onSetLoading_P_vacantsPageSlice(true));
        try {

            const { data } = await start_getOwnPublicVacants_vacantPage();
            // if (!data) return false;

            dispatch(onSetVacants_P_vacantsPageSlice(data || []));

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_P_vacantsPageSlice(false))

    }

    const emit_getOnePublication_VacantPage = async (_id: string) => {

        dispatch(onSetLoading_P_vacantsPageSlice(true))
        try {

            //  await start_getPostulationsByVacant(_id);

            const { data } = await start_getOnePublication(_id);
            if (!data) return false;

            console.log('data', data);

            dispatch(onSetVacant_P_vacantsPageSlice(data));

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_P_vacantsPageSlice(false))

    }

    const emit_createPostulation = async (vacant_id: string, comment?: string) => {

        dispatch(onSetLoading_P_vacantsPageSlice(true))
        try {

            const { data } = await start_createPostulation(vacant_id, comment);
            if (!data) return false;

            emit_swalToast({
                type: 'success',
                message: 'Postulación creada con éxito'
            });

            emit_handle_postulationVacantModal({
                status: false,
                vacant_id: '',
            });

            emit_getOnePublication_VacantPage(vacant_id);


        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_P_vacantsPageSlice(false))

    }

    const emit_evaluatePostulation = async (vacant_id: string, postulation_id: string, status: Vacant_Postulation_Status_Enum, comment?: string) => {

        dispatch(onSetLoading_P_vacantsPageSlice(true))
        try {

            const { data } = await start_evaluatePostulation(postulation_id, status, comment);
            if (!data) return false;

            emit_swalToast({
                type: 'success',
                message: 'Postulación evaluada'
            });

            emit_handleEvaluatePostulationModal({
                status: false,
                vacant_id: '',
                postulation_id: ''
            });

            emit_getOnePublication_VacantPage(vacant_id);

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_P_vacantsPageSlice(false))

    }

    const emit_isAlreadyPostulated = (user_id: string): boolean => {

        let exist: boolean = false;
        const postulations = state.vacant?.postulations || [];

        if (postulations.some((p) => {
            const user: User_I = p.user_postulate as User_I;
            if (user._id === user_id) return p
        }
        )) exist = true;

        return exist;

    }

    const emit_deletePostulation = async (vacant_id: string, postulation_id: string) => {

        dispatch(onSetLoading_P_vacantsPageSlice(true))
        try {

            const { data } = await start_deletePostulation(postulation_id);
            // if (!data) return false;

            emit_swalToast({
                type: 'success',
                message: 'Postulación eliminada'
            });

            emit_getOnePublication_VacantPage(vacant_id);

        } catch (error) {
        }
        dispatch(onSetLoading_P_vacantsPageSlice(false))

    }

    const emit_createPlanningContract = async (postulation_id: string) => {

     dispatch(onSetLoading_P_vacantsPageSlice(true))
        try {

            const { data } = await start_createPlanningContract(postulation_id);
            if (!data) return false;

            navigate(`/dashboard/contracts/contract/${data._id}`);

        } catch (error) {
        }
        dispatch(onSetLoading_P_vacantsPageSlice(false))

    }

    const emit_restore = () => {

        dispatch(onRestoreDefault_P_vacantsPageSlice())

    }

    return {

        // Attributes
        state,
        // Methods
        emit_restore,
        emit_createVacant,
        emit_getPublicVacants_vacantPage,
        emit_createPostulation,
        emit_getOnePublication_VacantPage,
        emit_evaluatePostulation,
        emit_getOwnPublicVacants_vacantPage,
        emit_deletePostulation,
        emit_createPlanningContract,
        emit_isAlreadyPostulated

    }

}