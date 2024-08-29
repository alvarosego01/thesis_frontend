import { useState } from "react"
import { Footer, Header } from "../../core/components"
import { Public_routes } from "./public.routes";


 export const Public_main = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-full overflow-hidden">

            <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto" >

                {/* Header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Main content */}
                <main className="h-auto  min-h-auto grow">

                    <Public_routes />

                </main>

                <Footer />

            </div>

        </div>
    )
}


export default Public_main