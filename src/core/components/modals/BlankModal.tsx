import { useEffect, useRef } from "react";
import { Modal_Base_I } from "./interfaces";



export const BlankModal = ({
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
        <dialog
            ref={modalRef}
            id={id} className="modal">
            <div className="p-0 modal-box">

                <div className="w-full max-w-lg max-h-full overflow-auto bg-white rounded shadow-lg p-s_25 dark:bg-slate-800">
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
    )
}
