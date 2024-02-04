import { Routes, Route, Navigate } from "react-router-dom"
import { AccountPage, NotificationsPage } from "."



export const Dashboard_routes = () => {
    return (
        <Routes>
            <Route path='account' element={<AccountPage />} />
            <Route path='notifications' element={<NotificationsPage />} />
            <Route path="/*" element={<Navigate to="/dashboard/account" replace />} />
        </Routes>
    )
}
