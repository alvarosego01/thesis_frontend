
import { FC, useEffect, useRef, useState } from "react";
import { List_I, ListDoActions, TertiaryButton } from "@components/index";
import { Transition } from "@utils/index";

export interface Button_ListDoActions_Props_I {
    options: List_I[];
    icon?: string;
    onClick: (action: any) => void;
}
export const Button_ListDoActions: FC<Button_ListDoActions_Props_I> = ({
    icon,
    options,
    onClick
}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef<HTMLButtonElement>(null);
    const dropdown = useRef<HTMLDivElement>(null);

    const onClick_ListDoActions = (action: string) => {

       onClick(action);

        return
    }

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: any) => {
            if (!dropdown.current) return;
            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current!.contains(target)) return;
            setDropdownOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: any) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <div className="relative inline-flex">

            <button
                className="flex items-center justify-center p-1 text-indigo-400 bg-gray-100 rounded-full trans hover:bg-gray-200 textarea-md group"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                ref={trigger}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
            >
                <i className='text-xl bx bx-dots-vertical-rounded'></i>
            </button>

            <Transition
                className={`origin-top-right z-10 absolute top-full min-w-44 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1 rounded shadow-lg overflow-hidden mt-1 `}
                show={dropdownOpen}
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
            >
                <div
                    ref={dropdown}
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setDropdownOpen(false)}
                >

                    <ListDoActions onClick={(action) => onClick_ListDoActions(action)} list={options} />
                </div>
            </Transition>
        </div>
    )
}