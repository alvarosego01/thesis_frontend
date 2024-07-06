

import { FC } from 'react'
import { SearchBar } from './SearchBar';
import { ContractsList } from './ContractsList';



const contracts = [
    {
        _id: '1',
        title: 'Contract 1',
        details: 'Contract 1 details',
        date: '2021-10-10',
        status: 'ACTIVE_PROPOSAL'
    },
    {
        _id: '2',
        title: 'Contract 2',
        details: 'Contract 2 details',
        date: '2021-10-10',
        status: 'IN_PROGRESS'
    },
    {
        _id: '3',
        title: 'Contract 3',
        details: 'Contract 3 details',
        date: '2021-10-10',
        status: 'FINALIZED'
    }
]


export const ContractListMain: FC = () => {
    return (

        <div className="w-full">

            <SearchBar />


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
