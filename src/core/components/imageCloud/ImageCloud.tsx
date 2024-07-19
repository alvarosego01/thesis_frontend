

import { FC, useEffect, useRef, useState } from 'react'
import { useUiGlobals } from '../../hooks';
import Backend_Api from '../../api/axiosBase';
import { signal, useSignal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';


interface Props_I {
    _id: string
    classname?: string;
    alt?: string;
    default?: string
    src: string,
}

export const ImageCloud: FC<Props_I> = ({
    ...props
}) => {

    // useSignals();

    const {
        classname,
        alt,
        src,
        _id
    } = props;

    const [isLoading, setisLoading] = useState(false);


    const image: string = src!;


    return (
        <>
            <div className="relative text-indigo-500 containerImage">
                <img alt={alt} className={classname} src={image} />
                {isLoading &&
                    <svg className="absolute top-0 bottom-0 left-0 right-0 block w-[35%] h-[35%] m-auto fill-current animate-spin shrink-0" viewBox="0 0 16 16">
                        <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                    </svg>
                }
            </div>
        </>
    )

}
