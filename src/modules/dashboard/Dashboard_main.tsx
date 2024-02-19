import { useState } from "react";
import { Dashboard_routes, Sidebar } from "."
import { Header } from "../../core/components";


 export const Dashboard_main = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="flex h-[100dvh] overflow-hidden">

                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="grow">

                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">

                        <Dashboard_routes />

                    </div>
                </main>
            </div>

        </>

    )
}

export default Dashboard_main;