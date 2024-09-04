

import { FC } from 'react';

interface Props_I {
    step: number;
    total: number;
}

export const StepCounter: FC<Props_I> = ({
    step = 0,
    total
}) => {


    const set_prev_active = (current: number): string => {

        let aux_class: string = "flex items-center justify-center w-6 h-6 text-xs font-semibold text-gray-500 bg-white rounded-full dark:bg-gray-900 dark:text-gray-400";

        if(current <= step){
            aux_class = "flex items-center justify-center w-6 h-6 text-xs font-semibold text-white rounded-full bg-violet-500";
        }

        return aux_class;

    }

    const set_total = () => {
        return (
            <ul className="relative flex justify-between w-full">

                {Array.from({ length: total }, (_, index) => (
                <li  key={index}>

                      <div
                            className={`${set_prev_active(index)}`}
                        >
                            { index + 1 }
                        </div>
                </li>

       ))}

            </ul>
        )
    }

    return (
        <div className="w-full max-w-md mx-auto ">

            <div className="relative">
                <div className="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-gray-200 dark:bg-gray-700/60" aria-hidden="true"></div>
                <ul className="relative flex justify-between w-full">


                    {
                        set_total()
                    }

                    {/*
                    <li>
                        <div
                            className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-gray-500 bg-white rounded-full dark:bg-gray-900 dark:text-gray-400"
                        >
                            2
                        </div>
                    </li>
                    */}

                </ul>
            </div>
        </div>
    )
}
