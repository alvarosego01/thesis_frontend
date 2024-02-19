
import { Dsh_Account_routes } from "./Dsh_Account.routes";


export const AccountPage = () => {


    return (
        <main className="grow">
            <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">

                {/* Page header */}
                <div className="mb-8">
                    {/* Title */}
                    <h1 className="text-2xl font-bold md:text-3xl text-slate-800 dark:text-slate-100">Account Settings ✨</h1>
                </div>

                <Dsh_Account_routes />

            </div>
        </main>

    );
}

export default AccountPage