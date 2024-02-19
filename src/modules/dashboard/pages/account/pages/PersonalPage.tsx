


export const PersonalPage = () => {

    return (
        <div className="mb-8 bg-white rounded-sm shadow-lg dark:bg-slate-800">

            <div className="flex flex-col md:flex-row md:-mr-px">

                <div className="grow">
                    {/* Panel body */}

                    <div className="p-6 space-y-6">
                        <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">My Account</h2>
                        {/* Picture */}
                        <section>
                            <div className="flex items-center">
                                <div className="mr-4">
                                    <img className="w-20 h-20 rounded-full" src={'aaa'} width="80" height="80" alt="User upload" />
                                </div>
                                <button className="text-white bg-indigo-500 btn-sm hover:bg-indigo-600">Change</button>
                            </div>
                        </section>
                        {/* Business Profile */}
                        <section>
                            <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">Business Profile</h2>
                            <div className="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
                            <div className="mt-5 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
                                <div className="sm:w-1/3">
                                    <label className="block mb-1 text-sm font-medium" htmlFor="name">Business Name</label>
                                    <input id="name" className="w-full form-input" type="text" />
                                </div>
                                <div className="sm:w-1/3">
                                    <label className="block mb-1 text-sm font-medium" htmlFor="business-id">Business ID</label>
                                    <input id="business-id" className="w-full form-input" type="text" />
                                </div>
                                <div className="sm:w-1/3">
                                    <label className="block mb-1 text-sm font-medium" htmlFor="location">Location</label>
                                    <input id="location" className="w-full form-input" type="text" />
                                </div>
                            </div>
                        </section>
                        {/* Email */}
                        <section>
                            <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">Email</h2>
                            <div className="text-sm">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</div>
                            <div className="flex flex-wrap mt-5">
                                <div className="mr-2">
                                    <label className="sr-only" htmlFor="email">Business email</label>
                                    <input id="email" className="form-input" type="email" />
                                </div>
                                <button className="text-indigo-500 shadow-sm btn border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600">Change</button>
                            </div>
                        </section>
                        {/* Password */}
                        <section>
                            <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">Password</h2>
                            <div className="text-sm">You can set a permanent password if you don't want to use temporary login codes.</div>
                            <div className="mt-5">
                                <button className="text-indigo-500 shadow-sm btn border-slate-200 dark:border-slate-700">Set New Password</button>
                            </div>
                        </section>

                    </div>

                    {/* Panel footer */}
                    <footer>
                        <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex self-end">
                                <button className="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">Cancel</button>
                                <button className="ml-3 text-white bg-indigo-500 btn hover:bg-indigo-600">Save Changes</button>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>
        </div>

    )
}
