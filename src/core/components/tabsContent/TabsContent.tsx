
import { FC, useState } from 'react';

import { TC_Tabs } from './TC_Tabs';
import { TC_Content_I, TC_Tabs_I } from './interfaces';

export interface TabsContent_Props_I {

    tabs: {
        tab: TC_Tabs_I
        content: TC_Content_I
    }[]

}

export const TabsContent: FC<TabsContent_Props_I> = ({
    tabs,
}) => {

    const [contentActive, setcontentActive] = useState<number>(0)

    const set_conent = () => {

        const Component = tabs[contentActive].content?.content;
        const title: string = tabs[contentActive].content?.title || '';

        return (
            <>
                {
                    (title !== '') && (
                        <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                            {title}
                        </h2>
                    )
                }
                {Component}
            </>
        )
    }

    const onClick_Tab = (index: number) => {

        setcontentActive(index)

    }

    return (
        <div className="grid w-full grid-cols-12 space-x-4 tabsContent">
            <div className='col-span-4 xl:col-span-3 '>
                <TC_Tabs active={contentActive} tabs={tabs.map((tab, index) => tab.tab)} onClick={onClick_Tab} />
            </div>
            <div className='col-span-8 p-5 border-l xl:col-span-9 border-slate-200'>
                {
                    set_conent()
                }
            </div>
        </div>
    )
}


