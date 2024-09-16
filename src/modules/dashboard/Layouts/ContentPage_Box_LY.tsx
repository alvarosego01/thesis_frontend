
import { FC } from "react"
import { PrimaryButton } from "../../../core/components"
import { Link } from "react-router-dom"

interface ContentPage_Box_LY_Props_I {
    title?: string
    children: React.ReactNode,
       button?: {
        text: string,
        icon: string,
        onClick: () => void
    }
       returnButton?: {
        text: string,
        path: string,
        // icon: string,
        // onClick: () => void
    }
}

export const ContentPage_Box_LY: FC<ContentPage_Box_LY_Props_I> = ({
    title,
    children,
    button,
    returnButton
}) => {
    return (
        <main className="grow">
            <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">

                <div className={`flex flex-col gap-4 mb-8 ${(button)? 'justify-between': 'justify-start'}`}>

                    {
                        returnButton && (
                            <div className="w-full">

                                       <Link className="px-3 text-gray-800 bg-white border-gray-200 bttn-sm dark:bg-gray-800 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 dark:text-gray-300" to={returnButton.path}>
                                <svg className="mr-2 text-gray-400 fill-current dark:text-gray-500" width="7" height="12" viewBox="0 0 7 12">
                                    <path d="M5.4.6 6.8 2l-4 4 4 4-1.4 1.4L0 6z" />
                                </svg>
                                <span>
                                    {returnButton.text}
                                </span>
                            </Link>
                            </div>
                        )
                    }

                    {/* Title */}
                    <div className="w-full">
                    {
                        title && (
                            <h1 className="text-2xl font-bold md:text-3xl text-slate-800 dark:text-slate-100">
                                {title}
                            </h1>
                        )
                    }
                       {
                        button && (
                            <PrimaryButton label={button.text} icon={button.icon} onClick={button.onClick} />
                        )
                    }
                    </div>

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
