
import { FC, useEffect, useState } from "react"

import { SearchBar, UserList } from "../../../../core/components"
import { UserSearch_I } from "../../interfaces"
import { useUrlParams } from "../../../../core/hooks";
import { useUserSearchStore } from "../../store";

interface SearchParams_I {
    term?: string;
    type?: UserSearch_I['value'];
}

const filtersByType: UserSearch_I[] = [
    {
        name: 'Ver Todos',
        value: 'all'
    },
    {
        name: 'Cantantes',
        value: 'singer'
    },
    {
        name: 'Instrumentistas',
        value: 'instrumentist'
    },
    {
        name: 'Directores de Orquestas',
        value: 'orchestra_director'
    },
    {
        name: 'Directores de Escena',
        value: 'scene_director'
    },
];

export const SearchUsersPage: FC = () => {

    const {
        getParams,
        setParams
    } = useUrlParams()

    const {
        state: {
            onLoading,
            results
        },
        emit_searchUsers_all,
        emit_searchUsers_byTerm,
        emit_restore
    } = useUserSearchStore()

    const [isMounted, setisMounted] = useState(false)

    const [filterType, setfilterType] = useState<UserSearch_I['value']>('all');

    const set_filter = (filter: UserSearch_I['value']) => {

        setfilterType(filter);

        let aux_p = getParams() as SearchParams_I;
        aux_p.type = filter;

        if (aux_p.term) delete aux_p.term;

        emit_searchUsers_all(filter);
        setParams({ ...aux_p });

    }

    const set_activeFilter = (filter: UserSearch_I['value']): string => {
        if (filterType === filter) {
            return 'text-violet-500';
        }
        return '';
    }

    const get_searchSubmit = (term: string) => {

        let aux_p = getParams() as SearchParams_I;
        if (term.length > 0) {

            aux_p.term = term;
            emit_searchUsers_byTerm(term);

        } else {

            delete aux_p.term;
            emit_searchUsers_all('all');
        }

        if (aux_p.type) delete aux_p.type;
        setParams({ ...aux_p });

    }

    const search_initial = () => {

        const aux_p = getParams() as SearchParams_I;

        if (aux_p.type) return emit_searchUsers_all(aux_p.type || 'all');
        if (aux_p.term) return emit_searchUsers_byTerm(aux_p.term);

        emit_searchUsers_all('all');

    }

    useEffect(() => {

        if (isMounted === false) return;
        search_initial();

    }, [isMounted]);

    useEffect(() => {

        setisMounted(true);

        return () => {
            emit_restore();
        }

    }, []);

    return (

        <div className="w-full px-4 py-16 mx-auto max-w-8xl">

            <div className="mb-5">

                <h1 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100">
                    Titulo busqueda de artistas
                </h1>

            </div>

            <div className="max-w-xl mb-5">
                <SearchBar onSubmit={(term) => get_searchSubmit(term)} isLoading={onLoading} />
            </div>

            <div className="mb-4 border-b border-gray-200 dark:border-gray-700/60">
                <ul className="flex -mx-4 overflow-x-scroll text-sm font-medium flex-nowrap sm:-mx-6 lg:-mx-8 no-scrollbar">

                    {
                        filtersByType.map((item, index) => (
                            <li onClick={() => set_filter(item.value)} key={index} className="pb-3 mr-6 hover:cursor-pointer last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                                <a className={`text-gray-400 whitespace-nowrap ${set_activeFilter(item.value)}`} >{item.name}</a>
                            </li>
                        ))
                    }

                </ul>
            </div>

            <div>

                <div className="mt-8">
                    {
                        results.length === 0 && (
                            <div className="flex items-center justify-center h-96">
                                <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                    No se encontrarón resultados
                                </p>
                            </div>
                        )
                    }
                    {
                        results.length > 0 && (
                            <>
                                <h2 className="mb-6 text-xl font-bold leading-snug text-gray-800 dark:text-gray-100">
                                    Artistas
                                </h2>
                                <UserList users={results} />
                            </>
                        )
                    }

                </div>

            </div>

        </div>

    )
}
