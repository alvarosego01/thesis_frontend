import { FC, useState } from "react";
import { SecondaryButton } from '@components/buttons/SecondaryButton';
import { Transform_dateShort } from "../../../../../core/pipes";

interface NotifyHeader_Props_I {
    date: Date;
    onDelete: () => void;
}

export const NotifyHeader: FC<NotifyHeader_Props_I> = ({
    date,
    onDelete
}) => {

    const [onLoading, setonLoading] = useState(false)

    const process_delete = () => {

        setonLoading(false);
        onDelete();

    }

    return (
        <div className="flex flex-row space-x-5">
            <span className="flex self-center my-auto text-sm font-normal leading-normal text-gray-400">
                { Transform_dateShort(date) }
            </span>
            <div className="z-10 flex items-center justify-center options">
                <SecondaryButton onClick={process_delete} isLoading={onLoading} icon="bx bx-trash" />
            </div>
        </div>
    )
}
