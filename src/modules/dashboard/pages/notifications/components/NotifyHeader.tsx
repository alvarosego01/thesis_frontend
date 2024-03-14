import { FC } from "react";
import { SecondaryButton } from '@components/buttons/SecondaryButton';


interface NotifyHeader_Props_I {
    date: string;
    onDelete: () => void;
}

export const NotifyHeader: FC<NotifyHeader_Props_I> = ({
    date,
    onDelete
}) => {
  return (
    <div className="flex flex-row space-x-5">
        <span className="flex self-center my-auto font-semibold leading-normal">
            {date}
        </span>
        <div className="z-10 flex items-center justify-center options">
            <SecondaryButton onClick={onDelete} icon="bx bx-trash"   />
        </div>
    </div>
  )
}
