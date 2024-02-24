import { Routes, Route, Navigate } from "react-router-dom"
import { ArtiscSkillsPage, CredentialsPage, PersonalPage, ProfessionalPage, SecuritySettingsPage } from "./Pages"



export const Dsh_Account_routes = () => {
    return (
        <Routes>
            <Route path='personal' element={<PersonalPage />} />
            <Route path='professional' element={<ProfessionalPage />} />
            <Route path='credentials' element={<CredentialsPage />} />
            <Route path='security' element={<SecuritySettingsPage />} />
            <Route path='skills' element={<ArtiscSkillsPage />} />

            <Route path="/*" element={<Navigate to="personal" replace />} />
        </Routes>
    )
}
