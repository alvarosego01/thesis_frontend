


import { FC, useEffect, useRef, useState } from 'react'
import { Modal_Feedback_I } from './interfaces';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondaryButton } from '../buttons/SecondaryButton';

export const FeedbackModal: FC<Modal_Feedback_I> = ({
    status,
    title = '¿Estás seguro de realizar esta acción?',
    text = '',
    type = 'info',
    labelAccept = 'Aceptar',
    labelCancel = 'Cancelar',
    onAccept,
    onClose
    // children,
}) => {

    const modalRef = useRef<HTMLDialogElement>(null);
    const closeModalRef = useRef<HTMLButtonElement>(null);
    const id: string = Math.random().toString(36).substring(7);

    const set_typeStyle = (): string => {

        switch (type) {
            case 'info':
                return 'bg-indigo-100 dark:bg-indigo-500/30';
            case 'warning':
                return 'bg-yellow-100 dark:bg-yellow-400/30';
            case 'danger':
                return 'bg-rose-100 dark:bg-rose-500/30';
            case 'success':
                return 'bg-emerald-100 dark:bg-emerald-400/30';
            default:
                return '';

        }
    }

    useEffect(() => {

        if (status) {
            modalRef.current?.showModal();
        }

    }, [status]);

    const closeModal = () => {

        // console.log('el status', status);
           modalRef.current?.close();
            setTimeout(() => {
                onClose && onClose();
            }, 200);
    }

    return (
        <>
            <dialog
                ref={modalRef}
                id={id} className="modal">
                <div className="p-0 bg-transparent rounded-rd_10 modal-box">

                    <div className="w-full max-w-lg max-h-full overflow-auto bg-white shadow-lg p-s_25 dark:bg-slate-800">
                        <div className="flex w-full space-x-4">
                            {/* Icon */}
                            <div className={`  flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${set_typeStyle()}`}>
                                {
                                    (type === 'success') && (
                                        <svg className="w-4 h-4 fill-current shrink-0 text-emerald-500" viewBox="0 0 16 16">
                                            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
                                        </svg>
                                    )
                                }
                                {
                                    (type === 'info') && (
                                        <svg className="w-4 h-4 text-indigo-500 fill-current shrink-0" viewBox="0 0 16 16">
                                            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                                        </svg>
                                    )
                                }
                                {
                                    (type === 'danger') && (
                                        <svg className="w-4 h-4 fill-current shrink-0 text-rose-500" viewBox="0 0 16 16">
                                            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
                                        </svg>
                                    )
                                }
                            </div>
                            {/* Content */}
                            <div className='w-full'>
                                {/* Modal header */}
                                <div className="mb-2">
                                    <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                                        {title}
                                    </div>
                                </div>
                                {/* Modal content */}
                                <div className="mb-10 text-sm">
                                    <div className="space-y-2">
                                        {
                                            text && (
                                                <p>{text}</p>
                                            )
                                        }
                                    </div>
                                </div>
                                {/* Modal footer */}
                                <div className="flex flex-wrap justify-end space-x-2">
                                    {
                                        onClose && (

                                            <SecondaryButton label={labelCancel} onClick={closeModal} />
                                        )
                                    }
                                    {
                                        onAccept && (
                                            <PrimaryButton label={labelAccept} onClick={onAccept} />
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button
                        type="button"
                        onClick={closeModal}
                        ref={closeModalRef}
                    >close</button>
                </form>
            </dialog>



        </>
    )
}