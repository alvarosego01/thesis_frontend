
import { Vacant_I } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";
import { User_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { FC } from "react"

import { PrimaryButton, SecondaryButton } from "../../../../../core/components";
import { Transform_dateShort, TransformVacantsHelpers_P } from "../../../../../core/pipes";

interface Props_I {
    vacant: Vacant_I;
    ownerData: {
        owner: string;
        subtitle: string;
    }
    onLoading: boolean;
    open_modalPostulaion: () => void;
    profileOwner: () => void;

    is_authenticated: boolean;
    is_notSameOwner: boolean;
    is_alreadyPostulated: boolean;

}

export const SidebarDetails: FC<Props_I> = ({
    vacant,
    ownerData,
    onLoading,
    is_authenticated,
    is_notSameOwner,
    is_alreadyPostulated,
    open_modalPostulaion,
    profileOwner
}) => {

    return (

        <div className="flex flex-col space-y-6 ">

            <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 rounded-xl lg:w-72 xl:w-80">
                {
                    (vacant.vacant_pic?._id) && (
                        <>
                            <img src={vacant.vacant_pic.src} className='object-cover object-top w-full mb-4 h-s_200 bg-slate-200' alt="" />
                        </>
                    )
                }
                <div className="p-5 py-0 mb-4 text-center">
                    <div className="inline-flex mb-1">
                        <i className='text-6xl bx bxs-institution' ></i>
                    </div>

                    <div className="mb-1 text-lg font-bold text-gray-800 dark:text-gray-100">
                        {ownerData.owner}
                    </div>
                    <div className="text-sm italic text-gray-500 dark:text-gray-400">
                        {ownerData.subtitle}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-5 pt-0 space-y-2">
                    {
                        (is_authenticated && is_notSameOwner && !is_alreadyPostulated) ? (
                            <PrimaryButton className={'w-full'} label='Postularse' isLoading={onLoading} onClick={open_modalPostulaion} />
                        ) : (
                            <>
                                <div className="w-full p-3 text-sm font-medium text-center text-gray-800 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100">
                                    Ya te has postulado
                                </div>
                            </>
                        )
                    }
                    <SecondaryButton className={'w-full'} label='Ver perfil de contratista' isLoading={onLoading} onClick={profileOwner} />
                </div>
            </div>


            <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 rounded-xl lg:w-72 xl:w-80">

                <aside className="w-full p-6 space-y-3">

                    <h2 className="font-bold" >
                        Detalles de vacante
                    </h2>

                    {
                        (vacant.operation) && (

                            <div className="space-y-2 text-sm">
                                <h3 className="font-medium text-gray-800 dark:text-gray-100">
                                    Fecha(as) de vacante
                                </h3>
                                <div className="flex ">
                                    <span className='block p-1 px-3 text-xs font-semibold rounded-full whitespace-nowrap bg-slate-100 text-slate-500'>
                                        {
                                            (vacant.operation.start_at === vacant.operation.end_at) ? (
                                                Transform_dateShort(vacant.operation.start_at)

                                            ) : (
                                                <>
                                                    {Transform_dateShort(vacant.operation.start_at)} a {Transform_dateShort(vacant.operation.end_at)}
                                                </>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                        )
                    }
                    {
                        (vacant.direction?.state && vacant.direction?.city) && (
                            <div className="space-y-2 text-sm">
                                <h3 className="font-medium text-gray-800 dark:text-gray-100">
                                    Dirección o lugar
                                </h3>
                                <div className="flex ">
                                    <span className='block p-1 px-3 text-xs font-semibold rounded-full whitespace-nowrap bg-slate-100 text-slate-500'>
                                        {vacant.direction?.state}, {vacant.direction?.city}
                                    </span>
                                </div>
                            </div>
                        )
                    }
                    {
                        (vacant.vacant_payment) && (

                            <div className="space-y-2 text-sm">
                                <h3 className="font-medium text-gray-800 dark:text-gray-100">
                                    Presupuesto de honorarios
                                </h3>
                                <div className="flex ">
                                    <span className='block p-1 px-3 text-xs font-semibold rounded-full whitespace-nowrap bg-slate-100 text-slate-500'>
                                        {vacant.vacant_payment.total} {TransformVacantsHelpers_P(vacant.vacant_payment.currency)}
                                    </span>
                                </div>
                            </div>
                        )
                    }

                </aside>
            </div>

        </div>

    )
}
