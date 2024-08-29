

import { FC } from 'react'
import { UserCard } from '../..'
import { User_I } from '@tesis-project/dev-globals/dist/modules/user/interfaces'

interface Props_I {
    users: User_I[]
}

export const UserList: FC<Props_I> = ({
    users = []
}) => {
    return (
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            {
                (users.length > 0) && users.map((user, index) => (
                    <UserCard key={index} user={user} />
                ))}
        </div>
    )
}
