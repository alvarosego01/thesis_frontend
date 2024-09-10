
import { Navigate, Route, Routes } from "react-router-dom"

export const Dsh_Account_routes = () => {
    return (
        <Routes>
            {/* <Route path='list' element={<ContractsListPage />} /> */}

            <Route path="/*" element={<Navigate to="list" replace />} />
        </Routes>
    )
}
