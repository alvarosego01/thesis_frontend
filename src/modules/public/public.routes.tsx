import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, RegisterPage } from "."
import { useAuthStore } from "../../core/store";
import { FC, useEffect } from "react";


export const Public_routes: FC = () => {

    const {
        state: {
            status
        },
        emit_checkAuthToken
    } = useAuthStore();


    useEffect(() => {
        emit_checkAuthToken();
    }, [])


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
