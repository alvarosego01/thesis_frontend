
import { FC } from "react"

import { TabsContent } from "../../../../../../core/components"
import { ContentPage_LY } from '../../../../Layouts/ContentPage_LY';
import { TabsContent_Props_I } from "../../../../../../core/components/tabsContent/TabsContent";

import {
    InstrumentistSkillSelectors,
    OrquestDirectorSkillSelectors,
    SceneDirectorSkillSelectors,
    // InstrumentistSkillSelectors,
    SingerSkillSelectors
 } from ".";

const tabs: TabsContent_Props_I = {

    tabs: [
        {
            tab: {
                title: 'Cantante',
                icon: {
                    type: 'icon',
                    content: 'bx bx-music text-30p'
                },
                text: 'ores, obcaecati rerum voluptates accusamus.',
            },
            content: {
                title: 'Define tus habilidades como cantante',
                content: <SingerSkillSelectors />
            }
        },
        {
            tab: {
                title: 'Instrumentista',
                icon: {
                    type: 'icon',
                    content: 'bx bx-music text-30p'
                },
                text: 'ores, obcaecati rerum voluptates accusamus.',
            },
            content: {
                title: 'Define tus habilidades como instrumentista',
                content: <InstrumentistSkillSelectors />
            }
        },
        {
            tab: {
                title: 'Director de orquesta',
                icon: {
                    type: 'icon',
                    content: 'bx bx-music text-30p'
                },
                text: 'ores, obcaecati rerum voluptates accusamus.',
            },
            content: {
                title: 'Define tus habilidades como director de orquesta',
                content: <OrquestDirectorSkillSelectors />
            }
        },
        {
            tab: {
                title: 'Director de escena',
                icon: {
                    type: 'icon',
                    content: 'bx bx-music text-30p'
                },
                text: 'ores, obcaecati rerum voluptates accusamus.',
            },
            content: {
                title: 'Define tus habilidades como director de escena',
                content: <SceneDirectorSkillSelectors />
            }
        },

    ],

}



export const ArtiscSkillsPage: FC = () => {
    return (
        <ContentPage_LY title="Capacidades artisticas" children={
            <TabsContent tabs={tabs.tabs} />
        } />
    )
}
