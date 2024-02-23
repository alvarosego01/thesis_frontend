import { Button_I } from "./interfaces"




export const PrimaryButton = ({ label, className, onClick, isLoading }: Button_I) => {
    return (
        <button type="button" className={`${className} text-white bg-indigo-500 btn hover:bg-indigo-600`}
            onClick={onClick} // Asign
        >
            {isLoading &&  // Añadir esta línea
                <svg className="w-4 h-4 fill-current mr-s_7.5 animate-spin shrink-0" viewBox="0 0 16 16">
                    <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                </svg>
            }
            {label}
        </button>
    )
}
