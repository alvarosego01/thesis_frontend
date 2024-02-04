import { useState } from "react";
import { Sidebar } from "."
import { Dashboard_routes } from "./dashboard.routes"


export const Dashboard_main = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <main className="grow">
                <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">

                    <Dashboard_routes />

                </div>
            </main>
        </>

    )
}
