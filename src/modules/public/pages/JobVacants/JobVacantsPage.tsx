
import { FC, useEffect, useState } from "react"
import { JobList, PrimaryButton } from "../../../../core/components"
import { useAuthStore, useUiStore } from "../../../../core/store"
import { User_Role_Enum } from "@tesis-project/dev-globals/dist/modules/auth/interfaces";
import { NewVacantModal } from "./components";
import { useVacantPageStore } from "../../store";
import { Vacant_I } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces";
import { Artist_Enum } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";


export const JobVacantsPage: FC = () => {

    const {
        state: {
            modals: {
                public: {
                    vacants: {
                        vacant_modal
                    }
                }
            }
        },
        emit_handle_vacantModal
    } = useUiStore();

    const {
        emit_is_role
    } = useAuthStore();

    const [isMounted, setisMounted] = useState(false)

    const {
        state: {
            onLoading,
            vacants
        },
        emit_createVacant,
        emit_getPublicVacants_vacantPage
    } = useVacantPageStore()

    const create_vacant = (vacant: Vacant_I) => {

        emit_createVacant(vacant);

    }

    const open_addVacant_Modal = () => {

        emit_handle_vacantModal({
            status: true,
            vacant_id: ''
        })

    }

    useEffect(() => {
        if (isMounted === false) return;

        emit_getPublicVacants_vacantPage(Artist_Enum.ALL)

    }, [isMounted])

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <>
            <div className="w-full px-4 py-16 mx-auto max-w-8xl">

                <div className="pb-5 mb-5 border-b border-gray-200 sm:flex sm:justify-between sm:items-center dark:border-gray-700/60">

                    <div className="mb-4 sm:mb-0">
                        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100">
                            Vacantes laborales
                        </h1>
                    </div>

                    <div className="grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end">

                        {
                            (emit_is_role(User_Role_Enum.CONTRATIST_ROLE)) && (
                                <PrimaryButton onClick={open_addVacant_Modal} isLoading={onLoading} label="Añadir vacante" />
                            )
                        }

                    </div>

                </div>

                {
                    (vacants.length > 0) && (
                <div className="mb-4 text-sm italic text-gray-500 dark:text-gray-400">
                    {vacants.length} vacantes
                </div>
                    )
                }

                <div className="w-full">

                    <JobList vacants={vacants} />

                </div>

                {/* Pagination */}
                {/* <div className="mt-8">
              <PaginationNumeric />
            </div> */}
            </div>

            <NewVacantModal {...vacant_modal} isLoading={onLoading} emit_createVacant={(v) => create_vacant(v)} />

        </>


    )
}
