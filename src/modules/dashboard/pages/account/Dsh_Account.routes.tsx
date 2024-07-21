
import { Routes, Route, Navigate } from "react-router-dom"
import {
    CredentialsPage,
    MediaPage,
    PersonalPage,
    ProfessionalPage,
    SecuritySettingsPage
} from "./pages"

export const Dsh_Account_routes = () => {
    return (
        <Routes>
            <Route path='personal' element={<PersonalPage />} />
            <Route path='professional' element={<ProfessionalPage />} />
            <Route path='media' element={<MediaPage />} />
            <Route path='credentials' element={<CredentialsPage />} />
            <Route path='security' element={<SecuritySettingsPage />} />

            <Route path="/*" element={<Navigate to="personal" replace />} />
        </Routes>
    )
}
