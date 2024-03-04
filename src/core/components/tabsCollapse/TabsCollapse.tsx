
import { FC, createRef, useRef, useState } from "react"

import { TCL_Tabs_I } from "./interfaces"
import { TCL_Tab } from "./TCL_Tabs"
import { TCL_Content } from "./TCL_Content"

interface TabsCollapse_Props_I {
    tabs: TCL_Tabs_I[]
}

export const TabsCollapse: FC<TabsCollapse_Props_I> = ({
    tabs
}) => {

    const [openStatus, setOpenStatus] = useState<boolean[]>(tabs.map(() => false));
    const tabsRefs = useRef(tabs.map(() => createRef<HTMLDetailsElement>()));

    /*
        tabsRefs.current.forEach((ref, index) => {
            useMutationObserver(ref, (mutations) => {
                mutations.forEach(({ target }: MutationRecord) => {
                    const detailsElement = target as HTMLDetailsElement;

                    const shouldHaveClass = detailsElement.open;
                    const hasClass = detailsElement.classList.contains('bg-indigo-50');

                    if (shouldHaveClass && !hasClass) {
                        detailsElement.classList.add('bg-indigo-50');
                        let aux = [...openStatus];
                        aux[index] = true;
                        setOpenStatus( [...aux ] );
                    } else if (!shouldHaveClass && hasClass) {
                        detailsElement.classList.remove('bg-indigo-50');
                          let aux = [...openStatus];
                        aux[index] = false;
                        setOpenStatus( [...aux ] );
                    }
                });
            }, {
                attributes: true,
            });
        });
     */

    const handle_open = (index: number) => {

        let aux = [...openStatus];
        const aux_state = tabsRefs.current[index].current?.open;
        aux[index] = !aux_state;
        setOpenStatus([...aux]);

    }
    const set_active = (index: number) => {

        if (openStatus[index]) {
            return "bg-indigo-50"
        }

        return ""
    }

    return (
        <div className="space-y-3 TabsCollapse">
            {
                tabs.length > 0 && (
                    tabs.map((tab, index) => (
                        <details
                            key={index}
                            ref={tabsRefs.current[index]}
                            className={`flex flex-row items-center justify-center w-full border  rounded-rd_10 trans border-slate-200 hover:bg-indigo-50 collapse collapse-arrow ${set_active(index)} `} >
                            <summary className="w-full hover:cursor-pointer"
                               onClick={() => handle_open(index) } >
                                <TCL_Tab
                                    title={tab.title}
                                    active={openStatus[index]}
                                    icon={tab.icon}
                                    onClick={() => { }} />
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
