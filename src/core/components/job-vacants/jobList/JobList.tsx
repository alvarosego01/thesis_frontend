

import React, { FC } from 'react'
import { JobCard } from './JobCard';
import { Vacant_I } from '@tesis-project/dev-globals/dist/modules/business/vacants/interfaces';

interface Props_I {
    vacants: Vacant_I[]
}


export const JobList: FC<Props_I> = ({
    vacants = []
}) => {

    return (

        <div className="grid gap-6 xl:grid-cols-2">
            {
                (vacants.length > 0) && (
                    <>
                        {
                            vacants.map((vacant, index) => <JobCard key={index} vacant={vacant} />)
                        }
                    </>
                )
            }
        </div>

    )
}