
import { FC } from "react"

interface ContentPage_Box_LY_Props_I {
    title?: string
    children: React.ReactNode
}

export const ContentPage_Box_LY: FC<ContentPage_Box_LY_Props_I> = ({
    title,
    children,
}) => {
    return (
        <main className="grow">
            <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">

                <div className="mb-8">
                    {/* Title */}
                    {
                        title && (
                            <h1 className="text-2xl font-bold md:text-3xl text-slate-800 dark:text-slate-100">
                                {title}
                            </h1>
                        )
                    }
                </div>

                {/* <div className="mb-8 bg-white rounded-sm shadow-lg dark:bg-slate-800"> */}
                <div className="mb-8 bg-white shadow-sm dark:bg-gray-800 rounded-xl">

                    <div className="flex flex-col p-5 md:flex-row md:-mr-px">

                        {
                            children
                        }

                    </div>

                </div>

            </div>
        </main>
    )
}
