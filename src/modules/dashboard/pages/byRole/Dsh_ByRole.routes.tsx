
import { Routes, Route, Navigate } from "react-router-dom"
import { ArtiscSkillsPage } from "./pages/artists/ArtiscSkillsPage"



export const Dsh_ByRole_Routes = () => {
    return (
        <Routes>
            <Route path='skills' element={<ArtiscSkillsPage />} />

            <Route path="/*" element={<Navigate to="skills" replace />} />
        </Routes>
    )
}
