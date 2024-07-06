
import { Navigate, Route, Routes } from "react-router-dom"
import { ContractsListPage, CreateContractPage } from "./pages"

export const Dsh_Account_routes = () => {
    return (
        <Routes>
            <Route path='list' element={<ContractsListPage />} />
            <Route path='new-contract' element={<CreateContractPage />} />

            <Route path="/*" element={<Navigate to="list" replace />} />
        </Routes>
    )
}
