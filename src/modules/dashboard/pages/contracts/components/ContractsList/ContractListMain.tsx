

import { FC, useEffect, useState } from 'react'
import { SearchBar } from './SearchBar';
import { ContractsList } from './ContractsList';
import { useContractStore } from '../../../../store';



export const ContractListMain: FC = () => {

    const {
        state: {
            contracts
        },
        emit_get_contracts
    } = useContractStore();

    const [isMounted, setisMounted] = useState(false);

    useEffect(() => {

        if (isMounted === false) return;

        emit_get_contracts();

    }, [isMounted]);


    useEffect(() => {
        setisMounted(true);
    }, []);


    return (

        <div className="w-full">

            {/* <SearchBar /> */}

            <div className='space-y-2'>
                {contracts.map((item) => {
                    return (
                        <ContractsList
                            key={item._id}
                            {...item}
                        />
                    );
                })}
            </div>

        </div>

    )
}
