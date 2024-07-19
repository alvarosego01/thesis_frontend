import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, RegisterPage } from "."
import { useAuthStore } from "../../core/store";
import { FC, useEffect } from "react";
import { useSignal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";


export const Public_routes: FC = () => {

    useSignals()
    const isMounted = useSignal(false);

    const {
        state: {
            status
        },
        emit_checkAuthToken
    } = useAuthStore();

    useEffect(() => {
        if (isMounted.value === false) return;
        emit_checkAuthToken();
    }, [isMounted.value]);

    useEffect(() => {
        isMounted.value = true;
    }, []);

    return (
        <Routes>
            {
                (status === 'not-authenticated' || status === 'checking') && (
                    <>
                        <Route path='login' element={<LoginPage />} />
                        <Route path='register' element={<RegisterPage />} />
                    </>
                )
            }
            <Route path='' index element={<HomePage />} />
            <Route path='home' element={<HomePage />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
    )

}
