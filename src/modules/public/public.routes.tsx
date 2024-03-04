import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, RegisterPage } from "."
import { useAuthStore } from "../../core/store";


export const Public_routes = () => {

    const {
        state: {
            status
        }
    } = useAuthStore();

    return (
        <Routes>
            {
                (status === 'not-authenticated') && (
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
