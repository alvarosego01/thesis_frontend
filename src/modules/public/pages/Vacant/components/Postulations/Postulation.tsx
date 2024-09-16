import { FC, useEffect, useState } from "react";
import { getAssetPath } from "../../../../../../core/utils";
import { Vacant_I, Vacant_Postulation_I, Vacant_Postulation_Status_Enum } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";
import { Transform_dateShort } from "../../../../../../core/pipes";
import { User_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";
import { Profile_I } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";
import { DangerButton, FeedbackModal, PrimaryButton } from '@components/index';
import { useVacantPageStore } from "../../../../store";
import { useUiStore } from "../../../../../../core/store";
import { useNavigate } from "react-router-dom";

// const UserImage03 = getAssetPath('/images/user-40-03.jpg');

interface Props_I {
    postulation: Vacant_Postulation_I;
    is_notSameOwner: boolean;
}

export const Postulation: FC<Props_I> = ({
    postulation,
    is_notSameOwner
}) => {

    const {

        emit_getOnePublication_VacantPage,
        emit_restore,
        emit_isAlreadyPostulated,
        emit_deletePostulation,
        emit_createPlanningContract,
        state: {
            onLoading
        }
    } = useVacantPageStore();

    const {
        state: {
            modals: {
                public: {
                    vacants: {
                        vacant_postulation,
                        vacant_evaluatePostulation
                    }
                }
            }
        },
        emit_handleEvaluatePostulationModal
    } = useUiStore();

               const navigate = useNavigate();


    const [avatar, setAvatar] = useState(getAssetPath('/images/user_anon.png'));
    const [isMounted, setisMounted] = useState(false);

    const [deleteConsult, setdeleteConsult] = useState<boolean>(false);

    const [contractConsult, setcontractConsult] = useState<boolean>(false);

    const [vacant, setvacant] = useState<Vacant_I>()

    const [userPostulant, setuserPostulant] = useState<User_I>();

    const [profile, setprofile] = useState<Profile_I>();

    const postulationStatus = (): string => {

        let aux_status = '';

        switch (postulation.status) {
            case Vacant_Postulation_Status_Enum.ACCEPTED:

                aux_status = 'Aceptado';

                break;
            case Vacant_Postulation_Status_Enum.SENDED:

                (is_notSameOwner) ? aux_status = 'Enviado' : aux_status = 'Recibido';

                break;

            case Vacant_Postulation_Status_Enum.REFUSED:

                aux_status = 'Rechazado';

                break;

            case Vacant_Postulation_Status_Enum.ON_HOLD:

                aux_status = 'En espera';

                break;

            case Vacant_Postulation_Status_Enum.CONTRACT_SENT:

                aux_status = 'Contrato enviado';

                break;

            default:
                break;
        }

        return aux_status;

    }

    const onCloseConsult = () => {

        setdeleteConsult(false);

    }

    const accept_deleteConsult = () => {


        if (vacant?._id) {

            emit_deletePostulation(vacant?._id, postulation._id)
            setdeleteConsult(false);
        }

    }

    const accept_sendContractProposal = () => {

        if (postulation._id) {

            // navigate(`/dashboard/contracts/contract/${postulation._id}`);
            emit_createPlanningContract(postulation._id);

        }

    }

    const open_deleteConsult = () => {

        setdeleteConsult(true);

    }

    const open_sendContractProposal = () => {

        setcontractConsult(true);

    }

    const is_notAccepted = (): boolean => {

        let aux = false;

        if (postulation.status !== Vacant_Postulation_Status_Enum.ACCEPTED) aux = true;

        return aux;

    }

    useEffect(() => {
        if (isMounted === false) return;

        if (postulation.user_postulate) {
            const user = postulation.user_postulate as User_I;
            setuserPostulant(user);

            const aux_profile = user.profile as Profile_I;
            setprofile(aux_profile);

            if (profile?.profile_pic?.src) {
                setAvatar(profile?.profile_pic?.src);
            }

        }

        setvacant(postulation.vacant as Vacant_I);

    }, [postulation, profile, isMounted]);

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (

        <>
            <div className="p-5 bg-white shadow-sm dark:bg-gray-800 rounded-xl">
                {/* Header */}
                <header className="flex items-start justify-between mb-3 space-x-3">
                    {/* User */}
                    <div className="flex items-start space-x-3">
                        <img className="rounded-full shrink-0" src={avatar} width="40" height="40" alt="User 03" />
                        <div>
                            <div className="leading-tight">
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-100" >
                                    {userPostulant?.name} {userPostulant?.last_name}
                                </span>
                            </div>
                            {
                                (postulation.created_at) && (
                                    <div className="text-xs text-gray-500">
                                        {Transform_dateShort(postulation.created_at)}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {/* Menu button */}
                    {/* <EditMenu align="right" className="relative inline-flex shrink-0">
            <li>
              <Link className="flex px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200" to="#0">
                Option 1
              </Link>
            </li>
            <li>
              <Link className="flex px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200" to="#0">
                Option 2
              </Link>
            </li>
            <li>
              <Link className="flex px-3 py-1 text-sm font-medium text-red-500 hover:text-red-600" to="#0">
                Remove
              </Link>
            </li>
          </EditMenu> */}

                    <div className="flex -space-x-3 -ml-0.5">
                        <span className='block p-1 px-3 text-sm font-semibold rounded-full whitespace-nowrap bg-slate-100 text-slate-500'>
                            {postulationStatus()}
                        </span>
                    </div>

                </header>
                {
                    (postulation.comment) && (
                        <div className="mb-5 space-y-2 text-sm text-gray-800 dark:text-gray-100">
                            <p>
                                {postulation.comment}
                            </p>
                        </div>
                    )
                }
                {
                    (!is_notSameOwner) && (
                        <footer className="flex flex-row items-center space-x-4">

                            {
                                (is_notAccepted()) && (
                                    <>
                                        <PrimaryButton label="Evaluar postulación" onClick={() => emit_handleEvaluatePostulationModal({
                                            status: true,
                                            vacant_id: vacant?._id!,
                                            postulation_id: postulation._id
                                        })} />
                                        <DangerButton label="Eliminar postulación" onClick={open_deleteConsult} />
                                    </>
                                )
                            }


                        </footer>


                    )
                }
                {
                    (is_notSameOwner && is_notAccepted()) && (
                        <footer className="flex flex-row items-center space-x-4">
                            <DangerButton label="Eliminar postulación" onClick={open_deleteConsult} />
                        </footer>
                    )
                }
                {
                    (!is_notSameOwner && !is_notAccepted()) && (
                        <footer className="flex flex-row items-center space-x-4">
                            <PrimaryButton label="Crear propuesta de contrato" onClick={open_sendContractProposal} />
                        </footer>
                    )
                }
            </div>
            {
                deleteConsult && (
                    <FeedbackModal
                        labelAccept="Aceptar"
                        type="danger"
                        title="Eliminar postulación"
                        text="¿Estás seguro?"
                        onClose={onCloseConsult}
                        onAccept={accept_deleteConsult}
                        isLoading={onLoading}
                        status={deleteConsult}
                    />
                )
            }
            {
                contractConsult && (
                    <FeedbackModal
                        labelAccept="Aceptar"
                        type="info"
                        title="Crear propuesta de contrato"
                        text="¿Estás seguro?"
                        onClose={() => setcontractConsult(false)}
                        onAccept={accept_sendContractProposal}
                        isLoading={onLoading}
                        status={contractConsult}
                    />
                )
            }

        </>
    )
}
