import { Routes, Route, Navigate } from "react-router-dom"
import { PersonalPage, ProfessionalPage } from "./pages"



export const Dsh_Account_routes = () => {
    return (
        <Routes>
            <Route path='personal' element={<PersonalPage />} />
            <Route path='professional' element={<ProfessionalPage />} />
            <Route path='credentials' element={<PersonalPage />} />
            <Route path='security' element={<PersonalPage />} />
            <Route path='skills' element={<PersonalPage />} />

            <Route path="/*" element={<Navigate to="personal" replace />} />
        </Routes>
    )
}
