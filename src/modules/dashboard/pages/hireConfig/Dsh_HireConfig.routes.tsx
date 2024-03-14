import { Routes, Route, Navigate } from "react-router-dom"
import { PaymentInfoPage, PersonalConditionsPage } from "./pages"



export const Dsh_HireConfig_routes = () => {
    return (
        <div className="w-full">
            <Routes>
                <Route path='personal-conditions' element={<PersonalConditionsPage />} />
                <Route path='payment-info' element={<PaymentInfoPage />} />
                <Route path="/*" element={<Navigate to="personal-conditions" replace />} />
            </Routes>
        </div>
    )
}
