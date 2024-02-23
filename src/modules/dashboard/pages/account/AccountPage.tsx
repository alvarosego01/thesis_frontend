
import { ContentSidebar } from "../../components";
import { Dsh_Account_routes } from "./Dsh_Account.routes";


export const AccountPage = () => {


    return (
        <main className="grow">
            <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">

                {/* Page header */}
                <div className="mb-8">
                    {/* Title */}
                    <h1 className="text-2xl font-bold md:text-3xl text-slate-800 dark:text-slate-100">
                        Perfil y configuraciones ✨
                    </h1>
                </div>

                <div className="mb-8 bg-white rounded-sm shadow-lg dark:bg-slate-800">

                    <div className="flex flex-col md:flex-row md:-mr-px">

                        <ContentSidebar />
                        <Dsh_Account_routes />

                    </div>

                </div>

            </div>
        </main>

    );
}

export default AccountPage