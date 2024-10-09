

import React, { FC, useEffect, useState } from 'react'
import { ContentPage_Box_LY } from '../../../../Layouts'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContractStore } from '../../../../store';
import { Vacant_I } from '@tesis-project/dev-globals/dist/modules/business/vacants/interfaces';
import { FeedbackModal, JobCard, PrimaryButton, SecondaryButton } from '../../../../../../core/components';
import { Payment_Account_I, User_HiringData_I, User_I, User_Personal_Data_I } from '@tesis-project/dev-globals/dist/modules/user/interfaces';
import { UserContractCard } from './components/UserContractCard';
import { AccountSelector } from './components';
import { Contract_Sign_I, Contract_Status_Enum } from '@tesis-project/dev-globals/dist/modules/business/contracts/interfaces';
import { useAuthStore } from '../../../../../../core/store';
import { User_Role_Enum } from '@tesis-project/dev-globals/dist/modules/auth/interfaces';
import { Transform_ContractStatus_P } from '../../../../../../core/pipes';

export const ContractPage: FC = () => {

    const {
        state: {
            contract,
            onLoading
        },
        emit_get_contract,
        emit_set_contractDetails,
        emit_send_contracProposal,
        emit_set_acceptContract,
        emit_generateDocument
    } = useContractStore()

    const {
        emit_is_role
    } = useAuthStore()

    const [isMounted, setisMounted] = useState(false);

    const navigate = useNavigate();

      const [acceptContract, setacceptContract] = useState<boolean>(false);

    const [vacant, setvacant] = useState<Vacant_I>();

    const [userContract, setuserContract] = useState<Contract_Sign_I>();

    const [hiringData, sethiringData] = useState<User_HiringData_I>()
    const [personalData, setpersonalData] = useState<User_Personal_Data_I>()

    const [account, setaccount] = useState<Payment_Account_I>()

    const { id } = useParams();

    const set_accountType = (payment: Payment_Account_I) => {

        setaccount(payment);

        id && emit_set_contractDetails(id, payment._id);

    }

    const pre_selectedPayment = (): string => {

        if (contract.details?.payment_info) {
            return contract.details.payment_info._id;
        }

        return '';

    }

    const send_purpose = () => {

        id && emit_send_contracProposal(id);

    }

    const send_set_acceptContract = () => {

        id && emit_set_acceptContract(id);

        setacceptContract(false);

    }

    useEffect(() => {
        if (isMounted === false) return;

        if (contract && contract.vacant) {
            setvacant(contract.vacant as any)
        }

        if (contract && contract.contractor) {

            const aux_user = contract.contractor as Contract_Sign_I;
            setuserContract(aux_user as any);

        }

        if (userContract && userContract.user) {

            const aux_user = userContract.user as User_I;
            const aux_hiringData = aux_user.hiring_data as User_HiringData_I;
            const aux_personal = aux_hiringData.personal as User_Personal_Data_I;

            aux_hiringData && sethiringData(aux_hiringData);
            aux_personal && setpersonalData(aux_personal);

            console.log('aux_hiringData', aux_hiringData);

        }

    }, [contract, userContract, vacant, hiringData, isMounted]);


    useEffect(() => {

        if (isMounted === false) return;

        id && emit_get_contract(id)

    }, [isMounted]);


    const get_document = () => {

        id && emit_generateDocument(id)

    }

    useEffect(() => {
        setisMounted(true);
    }, []);

    const contractTemplate = () => {
        return (
            <>
                <div className="p-5 space-y-5 grow">

                    <div className="grid grid-cols-3 gap-5">

                        {
                            (vacant) && (
                                <>
                                    <div className="col-span-2">

                                        <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                                            Vacante relacionada
                                        </h2>

                                        <JobCard className='!bg-gray-100 ' vacant={vacant} />
                                    </div>
                                </>

                            )
                        }

                        {/* <hr className="my-6 border-t border-gray-200 dark:border-gray-700/60" /> */}

                        {
                            (userContract?.user) && (
                                <>
                                    <div className="col-span-1 ">

                                        <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                                            Usuario a contratar
                                        </h2>
                                        <UserContractCard user={userContract.user as User_I} />
                                    </div>
                                </>
                            )
                        }

                    </div>

                    <hr className="my-6 border-t border-gray-200 dark:border-gray-700/60" />

                    {
                        (hiringData?.payment_accounts && hiringData.payment_accounts.length > 0) ? (
                            <div className="">

                                <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                                    Detalles de pago
                                </h2>
                                <p className="mb-5">
                                    Selecciona un método de pago para definir la forma a pagar los honorarios al usuario.
                                </p>

                                <AccountSelector
                                    can_select={contract.status === Contract_Status_Enum.PLANNING}
                                    pre_selected={pre_selectedPayment()} payment_accounts={hiringData.payment_accounts} select_account={(r) => { set_accountType(r) }} />

                            </div>
                        ) : (
                            <div className="">
                                <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                                    Detalles de pago
                                </h2>
                                <p className="mb-5">
                                    El usuario a contratar no tiene métodos de pago añadidos.
                                </p>
                            </div>
                        )
                    }
                    <hr className="my-6 border-t border-gray-200 dark:border-gray-700/60" />
                    <div className="">
                        <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100 ">
                            Condiciones especificas del usuario
                        </h2>
                        {
                            (personalData?.specific_conditions && personalData?.specific_conditions.length > 0) ? (
                                <p className="text-base">
                                    {personalData?.specific_conditions}
                                </p>
                            ) : (
                                <p className="text-base">
                                    El usuario a contratar no tiene condiciones especificas añadidas
                                </p>
                            )
                        }
                    </div>
                    <hr className="my-6 border-t border-gray-200 dark:border-gray-700/60" />
                    <footer>
                        <div className="flex flex-col ">
                            <div className="flex self-end gap-x-4">

                            {
                                contract.status === Contract_Status_Enum.PLANNING && (

                                    <PrimaryButton onClick={send_purpose} isLoading={onLoading} label="Enviar propuesta" />

                                )
                            }
                            {
                                contract.status === Contract_Status_Enum.IN_PROGRESS && (
                                    <PrimaryButton onClick={get_document} isLoading={onLoading} label="Descargar contrato" />
                                )
                            }
                            {
                                contract.status === Contract_Status_Enum.SINGS_PENDING && (
                                    <>
                                    <PrimaryButton onClick={get_document} isLoading={onLoading} label="Pre visualizar contrato" />
                                    {
                                        (emit_is_role(User_Role_Enum.ARTIST_ROLE)) && (
                                            <SecondaryButton onClick={()=> {}} isLoading={onLoading} label="Rechazar contrato" />
                                         )
                                    }
                                    {
                                        (emit_is_role(User_Role_Enum.ARTIST_ROLE)) && (
                                            <PrimaryButton onClick={()=> {setacceptContract(true)}} isLoading={onLoading} label="Aceptar y firmar" />
                                         )
                                    }
                                    </>
                                )
                            }

                            </div>
                        </div>
                    </footer>

                </div>
            </>
        )
    }

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <>

        <ContentPage_Box_LY
            title={`Planificación de contrato - Estado: ${Transform_ContractStatus_P(contract.status)}`}
            returnButton={{
                text: 'Ver todos los contratos',
                path: '/dashboard/contracts/list'
             }}
            children={
                <>
                    {contractTemplate()}
                </>
            }
        />

            {
                acceptContract && (
                    <FeedbackModal
                        labelAccept="Aceptar"
                        type="success"
                        title="Aceptar y firmar contrato"
                        text="¿Estás seguro?"
                        onClose={() => setacceptContract(false)}
                        onAccept={send_set_acceptContract}
                        isLoading={onLoading}
                        status={acceptContract}
                    />
                )
            }

        </>
    )
}

//   button={{
//          text: 'Crear nuevo',
//          icon: 'bx bx-plus',
//          onClick: _onClick,
//      }}