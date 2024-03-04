import { FC, useEffect } from "react"

interface TCL_Tab_Props_I {
    title: string;
    icon?: {
        type: 'img' | 'icon',
        content: string;
    };
    active: boolean;
    onClick?: () => void;
}

export const TCL_Tab: FC<TCL_Tab_Props_I> = ({
    title,
    icon,
    active = false,
    onClick
}) => {

    const set_active = (): string => {

        if (active) {
            return "rotate-90"
        }

        return ""
    }

    return (
        <div className="flex flex-row items-center justify-center p-3 space-x-4 w-ful">

            <div className="flex items-center justify-center p-3 text-indigo-500 bg-gray-100 icon rounded-rd_5">
                {
                    (icon?.type === 'icon') && (
                        <i className={`${icon?.content} text-20p`} ></i>
                    )
                }
            </div>
            <div className="flex-col items-center justify-center w-full info">

                <h3 className="flex items-center justify-between w-full mb-0 font-semibold leading-normal text-md text-slate-800 dark:text-slate-100">
                    {title}

                    <i className={`text-2xl bx bx-chevron-right trans ${set_active()}`} ></i>
                </h3>

            </div>

        </div>
    )
}
