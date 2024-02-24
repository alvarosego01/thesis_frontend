import { PrimaryButton } from "../../../../core/components";

interface NotFoundContent_Props_I {
    onClick: () => void;
    label: string;
    text?: string;
    icon?: string;
    enableButton?: boolean;
}

export const NotFoundContent = ({
    label = 'No hay contenido',
    text = '',
    icon = 'bx bx-sad',
    onClick,
    enableButton = true
}: NotFoundContent_Props_I) => {
    return (
        <div className="px-4 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-s_10 bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800">
                <i className={`${icon} text-25p`}></i>
            </div>
            <h2 className="mb-2 text-lg font-bold text-slate-800 dark:text-slate-100">
                {label}
            </h2>
            {
                text && (
                    <div className="text-sm leading-normal mb-s_15">
                        {text}
                    </div>
                )
            }
            {
                enableButton && (
                    <PrimaryButton icon='bx bx-plus' onClick={ onClick } label='Añadir' />
                )
            }
        </div>
    )
}
