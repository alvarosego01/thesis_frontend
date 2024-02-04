import { Route, Routes } from "react-router-dom"
import { Public_routes } from "./public/public.routes"
import { Dashboard_routes } from "./dashboard/dashboard.routes"
import { Dashboard_main } from "./dashboard/Dashboard_main"



export const App_Router = () => {
    return (
        <Routes>
            <Route path='/dashboard/*' element={<Dashboard_main />} />
            <Route path='/*' element={<Public_routes />} />
            {/* <Route path="/*" element={<Navigate to="/public" replace />
                } /> */}
        </Routes>

    )
}
