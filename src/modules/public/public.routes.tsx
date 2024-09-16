
import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, JobVacantsPage, LoginPage, RegisterPage, SearchUsersPage, UserProfilePage, VacantPage, VerifyPage } from "."
import { useAuthStore } from "../../core/store";
import { FC, useEffect, useState } from "react";

export const Public_routes: FC = () => {

    const [isMounted, setisMounted] = useState(false)

    const {
        state: {
            status
        },
        emit_checkAuthToken
    } = useAuthStore();

    useEffect(() => {
        if (isMounted === false) return;
        emit_checkAuthToken();
    }, [isMounted]);

    useEffect(() => {
        setisMounted(true);
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
            <Route path='search' element={<SearchUsersPage />} />
            <Route path='vacants/:type' element={<JobVacantsPage />} />
            {/* <Route path='' element={<JobVacantsPage />} /> */}
            <Route path='user/:id' element={<UserProfilePage />} />
            <Route path='vacant/:id' element={<VacantPage />} />
            <Route path='verify/:key' element={<VerifyPage />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
    )

}
