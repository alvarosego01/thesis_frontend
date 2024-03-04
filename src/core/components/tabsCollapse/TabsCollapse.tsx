
import { FC, RefObject, createRef, useEffect, useRef } from "react"

import { TCL_Tabs_I } from "./interfaces"
import { TCL_Tab } from "./TCL_Tabs"
import { TCL_Content } from "./TCL_Content"
import { useMutationObserver } from "../../hooks"


interface TabsCollapse_Props_I {
    tabs: TCL_Tabs_I[]
}

export const TabsCollapse: FC<TabsCollapse_Props_I> = ({
    tabs
}) => {

    // const tabsRefs = useRef<HTMLDetailsElement[]>([]);
    const tabsRefs = useRef<RefObject<HTMLDetailsElement>[]>([]);

    const onClick_Tab = (index: number) => {

    }

    // Función que maneja las mutaciones
    const handleMutations = (mutations: MutationRecord[], index: number) => {

        for (const mutation of mutations) {
            console.log('Mutation detected:', mutation);
            console.log('Mutation detected index:', index);
            // Aquí puedes agregar tu lógica adicional
        }

    };
    useMutationObserver<HTMLDetailsElement>({
        refs: tabsRefs.current,
        callback: handleMutations,
        options: { attributes: true }
    });

    useEffect(() => {
        // tabsRefs.current.forEach((ref, index) => {
        //     useMutationObserver({
        //         ref: ref,
        //         callback: (mutations) => handleMutations(mutations, index),
        //         options: { attributes: true }
        //     });
        // });
    }, [tabs]);

    return (
        <div className="space-y-3 TabsCollapse">
            {
                tabs.length > 0 && (
                    tabs.map((tab, index) => (
                        <details
                            key={index}
                            // ref={(el: HTMLDetailsElement) => (tabsRefs.current[index] = el)}
                            ref={tabsRefs.current[index]}
                            className={`flex flex-row items-center justify-center w-full  border hover:cursor-pointer rounded-rd_10 trans border-slate-200 hover:bg-indigo-50 collapse collapse-arrow `} open>
                            <summary className="w-full" >
                                <TCL_Tab
                                    title={tab.title}
                                    icon={tab.icon}
                                    onClick={() => onClick_Tab(index)}
                                />
                            </summary>
                            <div className="collapse-content trans">
                                <TCL_Content children={tab.children} />
                            </div>
                        </details>
                    )
                    )
                )
            }
        </div>
    )
}
