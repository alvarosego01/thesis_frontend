


import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { getAssetPath } from '../../../../../../core/utils';


const image = getAssetPath('/images/auth-image.jpg');

interface Props_I {
    // image: string;
    // title: string;
    // details: string;
    // date: string;
    // link: string
    // type_activity: string;
    // status: ContractStatus_Type;
}
export const ContractsList: FC<Props_I> = ({...props}: any) => {

    return (
        <>
          <div
      className={`shadow-lg rounded-sm border px-5 py-4 ${
        props.type === 'Featured'
          ? 'bg-amber-50 dark:bg-amber-400/10 border-amber-300 dark:border-amber-400/50'
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
      }`}
    >
      <div className="items-center justify-between space-x-2 space-y-4 md:flex md:space-y-0">
        {/* Left side */}
        <div className="flex items-start space-x-3 md:space-x-4">
          <div className="mt-1 w-9 h-9 shrink-0">
            <img className="rounded-full w-9 h-9" src={image} width="36" height="36" alt={props.company} />
          </div>
          <div>
            <Link className="inline-flex font-semibold text-slate-800 dark:text-slate-100" to={props.link}>
              {props.title}
            </Link>
            <div className="text-sm">{props.details}</div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center pl-10 space-x-4 md:pl-0">
          <div className="text-sm italic text-slate-500 dark:text-slate-400 whitespace-nowrap">{props.date}</div>
          {props.type && (
            <div
              className={`text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 ${
                props.type === 'Featured'
                  ? 'bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400'
                  : 'bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400'
              }`}
            >
              {props.type}
            </div>
          )}
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


