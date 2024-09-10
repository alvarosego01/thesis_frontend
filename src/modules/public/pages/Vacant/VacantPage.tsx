
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAssetPath } from '../../../../core/utils';
import { PrimaryButton } from '../../../../core/components/buttons/PrimaryButton';
import { SecondaryButton } from '../../../../core/components';
import { useVacantPageStore } from '../../store';
import { Transform_dateShort, transformType_Artists_P } from '../../../../core/pipes';
import { Vacant_I } from '@tesis-project/dev-globals/dist/modules/business/vacants/interfaces';
import { SidebarDetails, VacantsServices } from './components';
import { MetaRole_I, Profile_I } from '@tesis-project/dev-globals/dist/modules/profile/interfaces';
import { User_HiringData_I, User_I } from '@tesis-project/dev-globals/dist/modules/user/interfaces';
import { useAuthStore, useUiStore } from '../../../../core/store';
import { NewPostulatrionModal } from './components/NewPostulatrionModal';

const Image03 = getAssetPath('/images/company-icon-03.svg');
const Image04 = getAssetPath('/images/company-icon-07.svg');
const Image05 = getAssetPath('/images/company-icon-08.svg');
const Image06 = getAssetPath('/images/company-icon-01.svg');



export const VacantPage: FC = () => {

    const {
        state: {
            vacant,
            onLoading
        },
        emit_getOnePublication_VacantPage,
        emit_restore,
        emit_isAlreadyPostulated
    } = useVacantPageStore();

    const {
        state: {
            modals: {
                public: {
                    vacants: {
                        vacant_postulation
                    }
                }
            }
        },
        emit_handle_postulationVacantModal
    } = useUiStore();

    const {
        state: {
            auth: {
                user
            }
        },
        emit_is_authenticated
    } = useAuthStore();

    const navigate = useNavigate();

    const { id } = useParams();

    const [isMounted, setisMounted] = useState(false);
    const [owner, setowner] = useState<User_I>()
    const [profile, setprofile] = useState<Profile_I>()
    const [meta, setmeta] = useState<MetaRole_I>()
    const [hiring_data, setHiring_data] = useState<User_HiringData_I>();

    const [ownerData, setownerData] = useState({
        owner: '',
        subtitle: ''
    })

    const set_rolesTags = () => {

        return (
            (vacant.role_type && vacant.role_type.length > 0) && (
                vacant.role_type.map((role, index) => (
                    <>
                        <div key={'role' + index} className="text-xs inline-flex items-center font-medium border border-gray-300 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1 space-x-2">
                            <i className='bx bxs-music' ></i>
                            <span>
                                {transformType_Artists_P(role)}
                            </span>
                        </div>
                    </>
                ))
            )

        )

    }

    useEffect(() => {

        if (isMounted === false) return;

        id && emit_getOnePublication_VacantPage(id)


    }, [isMounted]);

    useEffect(() => {

        if (isMounted === false) return;

        if (vacant.owner) {
            setowner(vacant.owner as User_I);
            setHiring_data(owner?.hiring_data as User_HiringData_I)
        }

    }, [vacant.owner]);

    useEffect(() => {

        if (isMounted === false) return;

        if (owner?.profile) {
            setprofile(owner.profile as Profile_I);
        }

    }, [owner?.profile]);

    useEffect(() => {

        if (isMounted === false) return;
        if (owner?.hiring_data) {
            setHiring_data(owner.hiring_data as User_HiringData_I)
        }

    }, [owner?.hiring_data]);

    useEffect(() => {

        if (isMounted === false) return;
        if (profile?.meta) {
            setmeta(profile.meta as MetaRole_I);
        }

    }, [profile?.meta]);

    useEffect(() => {

        if (isMounted === false) return;

        let owner_name = `${owner?.name} ${owner?.last_name}`;
        let subtitle = ''

        if (hiring_data?.personal.social_reason) {
            subtitle = owner_name;
            owner_name = hiring_data.personal.social_reason;
            setownerData((x) => {
                x.owner = owner_name;
                x.subtitle = subtitle
                return x;
            })
        };

    }, [hiring_data?.personal.social_reason]);

    const profileOwner = () => {

        navigate(`/user/${owner?._id}`);

    }

    const open_modalPostulaion = () => {

        emit_handle_postulationVacantModal({
            status: true,
            vacant_id: vacant._id
        });

        console.log('open');

    }

    const is_notSameOwner = () => {

        if (user === owner?._id) return false;
        return true;

    }

    useEffect(() => {

        setisMounted(true);


        return () => {
            emit_restore()
        }

    }, []);

    return (

        <>
            <div className="w-full px-0 py-16">
                {/* Page content */}
                <div className="flex flex-col max-w-6xl mx-auto lg:flex-row lg:gap-x-8 xl:gap-x-16 ">
                    {/* Content */}
                    <div>
                        <div className="mb-6">
                            <Link className="px-3 text-gray-800 bg-white border-gray-200 bttn-sm dark:bg-gray-800 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 dark:text-gray-300" to="/vacants">
                                <svg className="mr-2 text-gray-400 fill-current dark:text-gray-500" width="7" height="12" viewBox="0 0 7 12">
                                    <path d="M5.4.6 6.8 2l-4 4 4 4-1.4 1.4L0 6z" />
                                </svg>
                                <span>Volver a vacantes</span>
                            </Link>
                        </div>

                        <div className="mb-2 text-sm italic text-gray-500 dark:text-gray-400">
                            {(vacant.created_at) && Transform_dateShort(vacant.created_at)}
                        </div>
                        <header className="mb-4">
                            {/* Title */}
                            <h1 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100">
                                {vacant.title}
                            </h1>
                        </header>

                        {/* Company information (mobile) */}
                        <div className="lg:hidden">
                            <SidebarDetails
                                vacant={vacant}
                                ownerData={ownerData}
                                onLoading={onLoading}
                                is_authenticated={emit_is_authenticated()}
                                is_notSameOwner={is_notSameOwner()}
                                is_alreadyPostulated={emit_isAlreadyPostulated(user)}
                                open_modalPostulaion={open_modalPostulaion}
                                profileOwner={profileOwner}
                            />
                        </div>

                        {/* Tags */}
                        <div className="mb-6">
                            <div className="flex flex-wrap items-center gap-1 -m-1">
                                {set_rolesTags()}
                            </div>
                        </div>

                        <hr className="my-6 border-t border-gray-200 dark:border-gray-700/60" />

                        {/* Desc */}
                        <div>
                            <h2 className="mb-2 text-xl font-bold leading-snug text-gray-800 dark:text-gray-100">
                                Descripción de vacante
                            </h2>
                            <div className="pr-2 space-y-6 text-base">
                                {vacant.desc}
                            </div>
                        </div>

                        <hr className="my-6 border-t border-gray-200 dark:border-gray-700/60" />

                        {/* About You */}
                        <div>
                            <h2 className="mb-2 text-xl font-bold leading-snug text-gray-800 dark:text-gray-100">
                                Descripción de rol
                            </h2>
                            <div className="pr-2 space-y-6 text-base">
                                {vacant.role_desc}
                            </div>
                        </div>

                        <hr className="my-6 border-t border-gray-200 dark:border-gray-700/60" />

                        {/* Things You Might Do */}
                        <div>
                            <h2 className="mb-4 text-xl font-bold leading-snug text-gray-800 dark:text-gray-100">
                                Prestaciones y servicios
                            </h2>

                            {/* <Services_section   /> */}

                            <VacantsServices services={{
                                transport: vacant.transport_service,
                                housing: vacant.housing_service,
                                costs: vacant.vacant_costs
                            }} />

                        </div>

                        <hr className="my-6 border-t border-gray-200 dark:border-gray-700/60" />

                        {/* Apply section */}
                        {
                            (emit_is_authenticated() && is_notSameOwner() && !emit_isAlreadyPostulated(user)) && (
                                <div className="mt-6">
                                    <p className="mb-6 italic font-medium">
                                        Te gustaría postularte?
                                    </p>
                                    <div className="flex items-center justify-between">

                                        <PrimaryButton label='Postularse' isLoading={onLoading} onClick={() => { }} />

                                    </div>
                                </div>
                            )
                        }


                        {/* <hr className="my-6 border-t border-gray-200 dark:border-gray-700/60" /> */}

                        {/* Related Jobs */}
                        {/* <div>
                  <h2 className="mb-6 text-xl font-bold leading-snug text-gray-800 dark:text-gray-100">Related Jobs</h2>
                  <div className="mt-6 space-y-2">
                    {items.map((item) => {
                      return (
                        <JobListItem
                          key={item.id}
                          id={item.id}
                          image={item.image}
                          role={item.role}
                          link={item.link}
                          details={item.details}
                          date={item.date}
                          type={item.type}
                          fav={item.fav}
                        />
                      );
                    })}
                  </div>
                </div> */}

                    </div>

                    {/* Sidebar */}
                    <div className="hidden space-y-4 lg:block">

                        {/* <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 rounded-xl lg:w-72 xl:w-80">
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
                                (emit_is_authenticated() && is_notSameOwner() && !emit_isAlreadyPostulated(user)) ? (
                                    <PrimaryButton className={'w-full'} label='Postularse' isLoading={onLoading} onClick={open_modalPostulaion} />
                                ) : (
                                    <>
                                        <div className="w-full p-3 text-sm font-medium text-center text-gray-800 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100">
                                            Ya te has postulado
                                        </div>
                                    </>
                                )
                            }
                            <SecondaryButton className={'w-full'} label='Perfil de contratista' isLoading={onLoading} onClick={profileOwner} />
                        </div>
                    </div> */}

                        <SidebarDetails
                            vacant={vacant}
                            ownerData={ownerData}
                            onLoading={onLoading}
                            is_authenticated={emit_is_authenticated()}
                            is_notSameOwner={is_notSameOwner()}
                            is_alreadyPostulated={emit_isAlreadyPostulated(user)}
                            open_modalPostulaion={open_modalPostulaion}
                            profileOwner={profileOwner}
                        />

                    </div>

                </div>

            </div>

            <NewPostulatrionModal {...vacant_postulation} isLoading={onLoading} />

        </>

    )
}
