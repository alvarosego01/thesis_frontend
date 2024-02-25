import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { useRef } from "react";


interface DocumentSelector_Props_I {
    name: string;
    text: string;
    // onChange: () => void;
    // onView: () => void;
}

export const DocumentSelector = ({
    name = 'Documento',
    text = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Id similique, minus qui magni adipisci voluptate placeat ullam exercitationem delectus,'
    // onChange,
    // onView
}: DocumentSelector_Props_I) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const onChangeDocument = (target: any) => {
        if (target.files === 0) return;
        // dispatch()
        // dispatch(startUploadFiles(target.files));

    }

    return (
        <>
            <div className="w-full bg-white border rounded-sm shadow-lg dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <div className="flex flex-col h-full">
                    {/* Card top */}
                    <div className="p-5 grow">
                        <div className="flex items-start justify-between">
                            {/* Image + name */}
                            <header>
                                <div className="flex mb-2">
                                    <div className="flex items-center justify-center icon mr-s_10">
                                        <i className='bx bxs-file-doc text-50p'></i>
                                    </div>
                                    <div className="flex items-center">
                                        <h2 className="justify-center text-xl font-semibold leading-normal">
                                            {name}
                                        </h2>
                                    </div>
                                </div>
                            </header>

                        </div>
                        {/* Bio */}
                        <div className="mt-2">
                            <div className="text-sm leading-normal">
                                {text}
                            </div>
                        </div>
                    </div>
                    {/* Card footer */}
                    <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">

                        <div className="flex self-end ">
                            <SecondaryButton onClick={() => {}} label="Ver documento" />
                            <PrimaryButton onClick={() => fileInputRef.current?.click()} label="Cargar archivo" className="ml-3" />
                        </div>

                    </div>
                </div>
            </div>
            <input
                onChange={onChangeDocument}
                ref={fileInputRef}
                type="file"
                // multiple
                style={{
                    display: 'none'
                }}
            />
        </>
    )
}
