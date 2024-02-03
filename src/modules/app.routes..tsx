import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./dashboard/Home"



export const App_Router = () => {
    return (

        <Routes>
            {/* <Route path="/register" element={
                <RegisterPage />
            } />
            <Route path="/FormikBasicPage" element={
                <FormikBasicPage />
            } />
            <Route path="/FormikYupPage" element={
                <FormikYupPage />
            } /> */}
            <Route path="/main" element={
                <Home />
            } />

            <Route path="/*" element={<Navigate to="/main" replace />
            } />
        </Routes>


    )
}
