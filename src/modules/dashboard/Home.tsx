import { useState } from "react";
import { Sidebar } from "./components/sidebar/Sidebar"



export const Home = () => {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    return (
        <>
            {/* <Sidebar /> */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </>
    )
}
