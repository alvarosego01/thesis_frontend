import { useEffect, useRef, useState } from "react";
import { Modal_Base_I } from "./interfaces";


export const InfoModal = ({
    status,
    children
}: Modal_Base_I) => {

    const modalRef = useRef<HTMLDialogElement>(null);
    const closeModal = useRef<HTMLButtonElement>(null);
    const id: string = Math.random().toString(36).substring(7);


    useEffect(() => {
        if (status) {
            modalRef.current!.showModal();
        } else {
            // status = false;
            modalRef.current!.close();
        }
    }, [status])

    return (
        <>
            {/* <button className="btn" onClick={() => modalRef.current!.showModal()}>
                open modal
            </button> */}
            <dialog
                ref={modalRef}
                id={id} className="modal">
                <div className="p-0 modal-box">

                    <div className="w-full max-w-lg max-h-full overflow-auto bg-white rounded shadow-lg dark:bg-slate-800">
                        {/* Modal header */}
                        <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between">
                                <div className="font-semibold text-slate-800 dark:text-slate-100">
                                    Titulo
                                </div>
                                <button className="text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400" onClick={() => closeModal.current?.click()}>
                                    <div className="sr-only">Close</div>
                                    <svg className="w-4 h-4 fill-current">
                                        <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {
                            children
                        }
                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button
                        ref={closeModal}
                    >close</button>
                </form>
            </dialog>
        </>
    )
}
