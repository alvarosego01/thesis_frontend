import { FC } from "react"
import { TabsCollapse } from "../../../../../../../core/components"
import { TCL_Tabs_I } from "../../../../../../../core/components/tabsCollapse/interfaces"

const tabs: TCL_Tabs_I[] = [
    {
        title: "Clasificación",
        icon: {
            type: "icon",
            content: "bx bx-edit-alt"
        },
        children: null
    },
    {
        title: "Tipo de voz",
        icon: {
            type: "icon",
            content: "bx bx-edit-alt"
        },
        children: null
    },
    {
        title: "Repertorio musical",
        icon: {
            type: "icon",
            content: "bx bx-edit-alt"
        },
        children: null
    }
]


interface SingerSkillSelectors_Props_I {
    // title: string;
}

export const SingerSkillSelectors: FC<SingerSkillSelectors_Props_I> = () => {
    return (
        <div className="space-y-5 SingerSkillSelectors">

            <section>
                <TabsCollapse tabs={[...tabs]} />
            </section>

        </div>


    )
}
