import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "."


export const Public_routes = () => {

    return (
        <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
    )

}
