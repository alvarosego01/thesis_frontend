
import { FC } from "react"
import { JobList, PrimaryButton } from "../../../../core/components"
import { useAuthStore, useUiStore } from "../../../../core/store"
import { User_Role_Enum } from "@tesis-project/dev-globals/dist/modules/auth/interfaces";
import { NewVacantModal } from "./components";


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

    const open_addVacant_Modal = () => {

        emit_handle_vacantModal({
            status: true,
            vacant_id: ''
        })

    }

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
                                <PrimaryButton onClick={open_addVacant_Modal} label="Añadir vacante" />
                            )
                        }

                    </div>

                </div>

                <div className="mb-4 text-sm italic text-gray-500 dark:text-gray-400">289 Meetups</div>

                <div className="w-full">

                    <JobList />

                </div>

                {/* Pagination */}
                {/* <div className="mt-8">
              <PaginationNumeric />
            </div> */}
            </div>

            <NewVacantModal {...vacant_modal} />

        </>


    )
}
