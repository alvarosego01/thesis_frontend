import { FC } from "react"
import { TC_Tabs_I } from "./interfaces"

interface TC_Tabs_Props_I {
    tabs: TC_Tabs_I[];
    active: number;
    onClick: (index: number) => void;
}

export const TC_Tabs: FC<TC_Tabs_Props_I> = ({
    tabs = [],
    active: number,
    onClick
}) => {

    const set_active = (index: number): string => {

        return (index === number) ? 'bg-indigo-50' : ''

    }

    return (
        <div className="w-full space-y-3 TC_Tabs ">
            {
                (tabs.length > 0) && (
                    tabs.map((tab, index) => (
                        <div key={index} className={`flex flex-row items-center justify-center w-full p-4 space-x-4 border hover:cursor-pointer rounded-rd_10 trans border-slate-200 TC_Tab hover:bg-indigo-50 ${set_active(index)}`} onClick={() => onClick(index)}>

                            <div className="flex items-center justify-center p-3 text-white bg-indigo-400 icon rounded-rd_5">
                                {
                                    (tab?.icon?.type === 'icon') && (
                                        <i className={tab.icon?.content} ></i>
                                    )
                                }
                            </div>
                            <div className="flex-col items-center justify-center w-full info">
                                <h3 className="mb-1 text-lg font-bold leading-normal text-slate-800 dark:text-slate-100">
                                    {tab.title}
                                </h3>
                                {
                                    tab.text && (
                                        <p className="text-sm leading-normal">
                                            {tab.text}
                                        </p>
                                    )
                                }
                            </div>

                        </div>
                    ))
                )
            }
        </div>
    )
}
