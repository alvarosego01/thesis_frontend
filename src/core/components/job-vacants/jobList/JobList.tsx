

import React, { FC } from 'react'
import { JobCard } from './JobCard';


export const JobList: FC = () => {

    return (

        <div className="grid gap-6 xl:grid-cols-2">
            <JobCard />
        </div>

    )
}