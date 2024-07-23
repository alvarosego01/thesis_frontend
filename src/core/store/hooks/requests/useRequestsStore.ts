import { Create_Request_Key_Dto } from '@tesis-project/dev-globals/dist/modules/auth/dto';
import { Requests_I, RequestStatus_Enum, RequestType_Enum } from '@tesis-project/dev-globals/dist/modules/auth/interfaces/requests';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useUiGlobals } from '../../../hooks';
import { onSetLoading_requestsSL, onSetRequest_requestSl, Slice_requestsState_I } from '../../reducers/session/auth/requestsSlice';
import { Reducers_I } from '../../store';
import { useUiStore } from '../useUiStore';
import { start_acceptRequest_requestTH, start_getRequest_requestTH, start_LostPassword_requestsTH, start_passwordChange_acceptRequest_requestTH, start_setRequest_requestsTH } from './requestsThunks';
import { useNavigate } from 'react-router-dom';


interface useHookStore_I {
    state: Slice_requestsState_I;
    emit_LostPassword: (email: string) => void;
    emit_changeEmailRequest: (email: string) => void;
    emit_getRequest: (key: string) => void;
    emit_acceptRequest_requestTH: (request: Requests_I) => void;
    emit_passwordChange_acceptRequest: (request: Requests_I, new_password: string) => void;
}

export const useRequestStore = (): useHookStore_I => {

    const dispatch = useDispatch();
    const {
        emit_handle_login_lostPassword_Modal
    } = useUiStore();

    const {
        emit_swalToast
    } = useUiGlobals();

    const navigate = useNavigate();


    const state = useSelector<Reducers_I, Slice_requestsState_I>(({ global }) => global.session.requests, shallowEqual);

    const emit_LostPassword = async (email: string) => {

        dispatch(onSetLoading_requestsSL(true));

        try {

            const resp = await start_LostPassword_requestsTH(email);
            if (!resp) return;

            emit_swalToast({ type: 'success', message: 'Solicitud enviada', message2: resp.message });

            emit_handle_login_lostPassword_Modal(false);


            dispatch(onSetLoading_requestsSL(false));
        } catch (error) {

            dispatch(onSetLoading_requestsSL(false));
        }

    }

    const emit_changeEmailRequest = async (email: string) => {

        dispatch(onSetLoading_requestsSL(true));

        try {

            const c: Create_Request_Key_Dto = {
                detail: email,
                type: RequestType_Enum.CHANGE_EMAIL
            }

            const resp = await start_setRequest_requestsTH(c);
            if (!resp) return;

            emit_swalToast({ type: 'success', message: 'Solicitud enviada', message2: 'Consulta en tu email' });

            dispatch(onSetLoading_requestsSL(false));
        } catch (error) {

            dispatch(onSetLoading_requestsSL(false));
        }

    }

    const emit_getRequest = async (key: string) => {

        dispatch(onSetLoading_requestsSL(true));

        try {

            const resp = await start_getRequest_requestTH(key);
            if (!resp) return;

            console.log('resp', resp);

            if(resp.data?.status === RequestStatus_Enum.USED){
                emit_swalToast({ type: 'error', message: 'Solicitud ya utilizada' });
                navigate('/home');
                return;
            }

            dispatch(onSetRequest_requestSl(resp.data!));

            dispatch(onSetLoading_requestsSL(false));
        } catch (error) {

            console.log('error', error);

            dispatch(onSetLoading_requestsSL(false));
        }

    }

    const emit_acceptRequest_requestTH = async (request: Requests_I) => {

        dispatch(onSetLoading_requestsSL(true));

        try {

            let resp = await start_acceptRequest_requestTH(request.key);
            if (!resp) return;

            if (request.type === RequestType_Enum.CONFIRM_ACCOUNT) {

                emit_swalToast({ type: 'success', message: 'Cuenta verificada' });

            }
            if (request.type === RequestType_Enum.CHANGE_EMAIL) {

                emit_swalToast({ type: 'success', message: 'Cambio de email realizado' });

            }

            navigate('/home');

            dispatch(onSetLoading_requestsSL(false));
        } catch (error) {

            dispatch(onSetLoading_requestsSL(false));
        }

    }

    const emit_passwordChange_acceptRequest = async (request: Requests_I, new_password: string) => {

        dispatch(onSetLoading_requestsSL(true));

        try {

            let resp = await start_passwordChange_acceptRequest_requestTH(request.key, new_password);
            if (!resp) return;

            emit_swalToast({ type: 'success', message: 'Cambio de contraseña realizado' });

            navigate('/home');

            dispatch(onSetLoading_requestsSL(false));
        } catch (error) {

            dispatch(onSetLoading_requestsSL(false));
        }

    }

    return {
        //Params
        state,

        emit_changeEmailRequest,
        emit_getRequest,
        emit_acceptRequest_requestTH,
        emit_passwordChange_acceptRequest,
        emit_LostPassword
    }
}
