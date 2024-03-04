import { FC } from "react"

interface TCL_Tab_Props_I {
    title: string;
    icon?: {
        type: 'img' | 'icon',
        content: string;
    };
    onClick?: () => void;
}

export const TCL_Tab: FC<TCL_Tab_Props_I> = ({
    title,
    icon,
    onClick
}) => {

    return (
        <div className="flex flex-row items-center justify-center p-4 space-x-4 w-ful">

            <div className="flex items-center justify-center p-3 text-indigo-500 bg-gray-100 icon rounded-rd_5">
                {
                    (icon?.type === 'icon') && (
                        <i className={`${icon?.content} text-20p`} ></i>
                    )
                }
            </div>
            <div className="flex-col items-center justify-center w-full info">

                <h3 className="flex items-center mb-0 font-semibold leading-normal text-md text-slate-800 dark:text-slate-100">
                    {title}

                    <i className='text-lg bx bx-chevron-right' ></i>
                </h3>

            </div>

        </div>
    )
}
