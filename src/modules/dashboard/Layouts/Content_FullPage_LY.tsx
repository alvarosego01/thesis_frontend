import { FC } from "react"
import { PrimaryButton } from '@components/buttons/PrimaryButton';


interface Props_I {
    title?: string
    children: React.ReactNode,
    button?: {
        text: string,
        icon: string,
        onClick: () => void
    }
}

export const Content_FullPage_LY: FC<Props_I> = ({
    title,
    children,
    button
}) => {
    return (
        <main className="grow">
            <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">

                {/* Page header */}
                <div className="pb-5 mb-5 border-b border-gray-200 sm:flex sm:justify-between sm:items-center">

                    {/* Left: Title */}
                    <div className="mb-4 sm:mb-0">
                        <h1 className="text-2xl font-bold md:text-3xl text-slate-800 dark:text-slate-100">
                            {title}
                        </h1>
                    </div>

                    {
                        button && (
                            <PrimaryButton label={button.text} icon={button.icon} onClick={button.onClick} />
                        )
                    }

                </div>

                {/* Page content */}
                <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
                    {children}
                </div>

            </div>
        </main>

    )
}
