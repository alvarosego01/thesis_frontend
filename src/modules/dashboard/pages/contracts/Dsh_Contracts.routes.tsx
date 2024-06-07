
import { Navigate, Route, Routes } from "react-router-dom"
import { ContractsListPage } from "./pages"

export const Dsh_Account_routes = () => {
    return (
        <Routes>
            <Route path='contracts' element={<ContractsListPage />} />

            <Route path="/*" element={<Navigate to="personal" replace />} />
        </Routes>
    )
}
