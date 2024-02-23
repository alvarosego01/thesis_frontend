

import { useLocation } from 'react-router-dom';
import { ContentSidebarConstants } from '../../models/ContentSidebarConstants';
import { ContentSidebarGroup } from './ContentSidebarGroup';

export const ContentSidebar = () => {

    const location = useLocation();
    const { pathname } = location;

    const itemsSidebar = [...ContentSidebarConstants];

    return (
        <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 min-w-[15rem] md:space-y-3">

            {
                (itemsSidebar.length > 0) && itemsSidebar.map(item => (
                    <ContentSidebarGroup key={item.titleGroup} item={item} pathname={pathname} />
                ))
            }

        </div>
    );
}