


import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAssetPath } from '../../../../../../core/utils';
import { Contract_I } from '@tesis-project/dev-globals/dist/modules/business/contracts/interfaces';
import { Vacant_I } from '@tesis-project/dev-globals/dist/modules/business/vacants/interfaces';
import { Transform_ContractStatus_P, Transform_dateShort } from '../../../../../../core/pipes';


const image = getAssetPath('/images/register_login.jpg');


export const ContractsList: FC<Contract_I> = ({...contract}) => {

    const [vacant, setvacant] = useState(contract.vacant as Vacant_I)

    return (
        <>
          <div
      className={`shadow-lg rounded-sm border px-5 py-4 bg-white`}
    >
      <div className="items-center justify-between space-x-2 space-y-4 md:flex md:space-y-0">
        {/* Left side */}
        <div className="flex items-start space-x-3 md:space-x-4">
          <div className="flex items-center justify-center bg-indigo-500 rounded-full w-9 h-9 shrink-0">
            {/* <img className="rounded-full w-9 h-9" src={image} width="36" height="36" alt={props.company} /> */}
            <i className='text-xl text-white bx bx-briefcase' ></i>
          </div>
          <div>
            <Link className="inline-flex font-semibold text-slate-800 dark:text-slate-100" to={`/dashboard/contracts/contract/${contract._id}`}>
              {vacant.title}
            </Link>
            <div className="text-sm">
                {Transform_ContractStatus_P(contract.status)}
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center pl-10 space-x-4 md:pl-0">
          <div className="text-sm italic text-slate-500 dark:text-slate-400 whitespace-nowrap">{Transform_dateShort(contract.created_at as any)}</div>

          {/* <button className={`${props.fav ? 'text-amber-500' : 'text-slate-300 dark:text-slate-600 hover:text-slate-400 dark:hover:text-slate-500'}`}>
            <span className="sr-only">Bookmark</span>
            <svg className="w-3 h-4 fill-current" width="12" height="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 0C.9 0 0 .9 0 2v14l6-3 6 3V2c0-1.1-.9-2-2-2H2Z" />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
        </>
    );

}


