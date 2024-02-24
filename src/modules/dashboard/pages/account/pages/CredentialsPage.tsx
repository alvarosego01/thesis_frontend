import { DocumentSelector } from "../../../../../core/components";

export const CredentialsPage = () => {

    //         const fileInputRef_identity = useRef();
    // const fileInputRef_professional = useRef();

    return (
        <div className="grow">
            {/* Panel body */}

            <div className="p-6 space-y-6">
                <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">
                    Credenciales
                </h2>


                <section>

                    <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                        Documentos
                    </h2>
                    <div className="text-sm mb-s_25">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo
                    </div>
                    <div className="grid w-full grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-y-0 gap-x-5">

                        <DocumentSelector name="Doc. Identidad" text=" dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo" />

                        <DocumentSelector name="Constancia profesional" text=" dolor sit amet consectetur adipisicing elit. Sed neque aut et cumque, labo" />
                    </div>

                </section>


            </div>

        </div>
    )
}
