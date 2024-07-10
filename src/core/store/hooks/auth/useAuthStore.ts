import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Reducers_I } from "../../store";

import { start_check_renew_Tk_authTH, start_login_authTH, start_register_authTH } from "./authThunks";

import { _Response_I } from "@tesis-project/dev-globals/dist/core/interfaces";

import { onChecking_authSL, onLogin_authSL, onLogout_authSL, onSetLoading_authSL, Slice_authState_I } from "../../reducers/session/auth/authSlice";
import { useUserStore } from "../../../../modules/dashboard/store";
import { User_Role_Enum } from "@tesis-project/dev-globals/dist/modules/auth/interfaces";
import { useNavigate } from "react-router-dom";
import { useSession, useUiGlobals } from "../../../hooks";

interface useHookStore_I {
    state: Slice_authState_I;
    emit_onLogout: () => void;
    emit_checkAuthToken: () => void;
    emit_login: (email: string, password: string) => void;
    emit_register_user: (name: string, last_name: string, email: string, role: User_Role_Enum, password: string) => void;
}

export const useAuthStore = (): useHookStore_I => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        emit_get_user,
        emit_clear_user
    } = useUserStore();

    const {
        emit_swalToast
    } = useUiGlobals();

    const {
        emit_clear_all_data
    } = useSession();

    const state = useSelector<Reducers_I, Slice_authState_I>(({ global }) => global.session.auth, shallowEqual);

    const emit_onLogout = () => {
        localStorage.clear();
        dispatch(onLogout_authSL())
        // emit_clear_user();
        emit_clear_all_data();
    }

    const emit_register_user = async (name: string, last_name: string, email: string, role: User_Role_Enum, password: string) => {

        dispatch(onSetLoading_authSL(true));

        try {

            const { data } = await start_register_authTH(name, last_name, email, role, password);
            if (!data) return;

            dispatch(onSetLoading_authSL(false));

            emit_swalToast({ type: 'success', message: 'Usuario registrado' });

            navigate('/login');

        } catch (error) {

            dispatch(onSetLoading_authSL(false));
        }

    }

    const emit_login = async (email: string, password: string) => {

        dispatch(onChecking_authSL());

        try {

            const { data } = await start_login_authTH(email, password);
            if (!data) return;

            localStorage.setItem('token', data.token!);
            dispatch(onLogin_authSL(data));

            emit_swalToast({ type: 'success', message: 'Bienvenido' });

            emit_get_user(data.user);


        } catch (error) {

            dispatch(onLogout_authSL());

        }

    }

    const emit_checkAuthToken = async () => {

        const token = localStorage.getItem('token');

        if (!token) return dispatch(onLogout_authSL());

        try {
            const { data } = await start_check_renew_Tk_authTH();
            if (!data) return;

            localStorage.setItem('token', data.token!);
            dispatch(onLogin_authSL(data));
            emit_get_user(data.user);

        } catch (error) {
            localStorage.clear();
            dispatch(onLogout_authSL());
        }

    }

    return {
        //Params
        state,

        //methods
        emit_onLogout,
        emit_checkAuthToken,
        emit_login,
        emit_register_user
    }
}
