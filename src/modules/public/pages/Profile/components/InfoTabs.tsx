


import React, { FC, useState } from 'react'

interface Item_I {
    title: string;
    content: React.ReactNode;
}

interface Props_I {
    // items: Item_I[]
}

export const InfoTabs: FC<Props_I> = ({
    // items
}) => {

    const [selected, setselected] = useState<number>(0)

    return (
        <>
            <div className="relative mb-6">
                <div className="absolute bottom-0 w-full h-px bg-gray-200 dark:bg-gray-700/60" aria-hidden="true"></div>
                <ul className="relative flex -mx-4 overflow-x-scroll text-sm font-medium flex-nowrap sm:-mx-6 lg:-mx-8 no-scrollbar">

                    <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                        <a className="block pb-3 border-b-2 text-violet-500 whitespace-nowrap border-violet-500" >
                            Información
                        </a>
                    </li>
                    {/* <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                                    <a className="block pb-3 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap" href="#0">
                                        Contenido audiovisual
                                    </a>
                                </li> */}

                </ul>
            </div>

            <div className="flex flex-col xl:flex-row xl:space-x-16">

                conbtenido

            </div>

        </>
    )
}
