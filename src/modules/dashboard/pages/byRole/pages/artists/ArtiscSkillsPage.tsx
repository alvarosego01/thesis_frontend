
import { FC, useEffect, useState } from "react"

import { TabsContent } from "../../../../../../core/components"
import { ContentPage_Box_LY } from '../../../../Layouts/ContentPage_Box_LY';
import { TabsContent_Props_I } from "../../../../../../core/components/tabsContent/TabsContent";

import {
    InstrumentistSkillSelectors,
    OrquestDirectorSkillSelectors,
    SceneDirectorSkillSelectors,
    // InstrumentistSkillSelectors,
    SingerSkillSelectors
} from ".";
import { useUserMetaStore } from "../../../../store/hooks/user_meta/useUserMetaStore";

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

    const {
        emit_get_userMeta
    } = useUserMetaStore();

    const [isMounted, setisMounted] = useState(false);

    useEffect(() => {

        if (isMounted === false) return;

        emit_get_userMeta();

    }, [isMounted])

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <ContentPage_Box_LY title="Capacidades artisticas" children={
            <TabsContent tabs={tabs.tabs} />
        } />
    )
}
