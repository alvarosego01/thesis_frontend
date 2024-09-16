import { Vacant_I, Vacant_Postulation_I } from "@tesis-project/dev-globals/dist/modules/business/vacants/interfaces"
import { FC } from "react";
import { Postulation } from "./Postulation";
import { useAuthStore } from "../../../../../../core/store";
import { User_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces";


interface Props_I {

    postulations: Vacant_Postulation_I[];
    onLoading: boolean;

    is_authenticated: boolean;
    is_notSameOwner: boolean;
    is_alreadyPostulated: boolean;

}

export const PostulationsVacant: FC<Props_I> = ({
    postulations = [],
    onLoading,
    is_authenticated,
    is_notSameOwner,
    is_alreadyPostulated
}) => {

    const {
        state: {
            auth: {
                user
            }
        }
    } = useAuthStore();

    const get_myPostulations = () => {

        let aux_postulation: Vacant_Postulation_I[];

        aux_postulation = postulations.filter(r => {
            const aux_r = r.user_postulate as User_I;
            if (aux_r._id && user) return r;
        }) || [];

        return (
            <>
            {
                (aux_postulation && aux_postulation.length > 0) ? (
                    <>
                         <h2 className="mb-4 text-xl font-bold leading-snug text-gray-800 dark:text-gray-100">
                    Tu postulación
                </h2>

                <div className="w-full space-y-4 pcTab:w-8/12" >
                    {
                        (postulations.length > 0) && (
                            postulations.map((postulation, index) => (
                                <Postulation is_notSameOwner={is_notSameOwner} key={index} postulation={postulation} />
                            ))
                        )
                    }
                </div>
                    </>
                ) : (
                    <>
                    </>
                )
            }
            </>
        )

    }

    return (

        <div className="flex flex-col max-w-6xl mx-auto lg:gap-x-8 xl:gap-x-16 ">

            {
                (is_authenticated && !is_notSameOwner) && (
                    <>
                        <h2 className="mb-4 text-xl font-bold leading-snug text-gray-800 dark:text-gray-100">
                            Postulaciones: {postulations.length}
                        </h2>

                        <div className="w-full space-y-4 pcTab:w-8/12" >
                            {
                                (postulations.length > 0) && (
                                    postulations.map((postulation, index) => (
                                        <Postulation is_notSameOwner={is_notSameOwner}  key={index} postulation={postulation} />
                                    ))
                                )
                            }
                        </div>
                    </>
                )
            }
            {
                (is_authenticated && is_alreadyPostulated && is_notSameOwner) && (
                   get_myPostulations()
                )
            }

        </ div>
    )
}
