
import { FC } from "react";

import { SecondaryButton } from "../../../../../core/components";
import { NotFoundContent } from "../../../components";

interface SignatureSelectorProps {

    setSignature: () => void;
    signature?: string;
    updated_at?: string;

}

export const SignatureSelector: FC<SignatureSelectorProps> = ({
    signature,
    setSignature,
    updated_at
}) => {
    return (
        <>
            <div className="mt-5 signature">
                {
                    signature && (
                        <div className="flex flex-col">
                            <span className="text-5xl ml-s_10 mb-s_25 font-tuesdaynight">
                                {signature}
                            </span>
                            <small className="font-semibold mb-s_15">
                                Última actualización: {updated_at}
                            </small>
                            <SecondaryButton label="Cambiar firma" onClick={setSignature} />
                        </div>
                    )
                }
                {
                    !signature && (
                        <NotFoundContent title="No hay firma definida" onClick={setSignature} icon="bx bx-edit" text="Nobis unde perspiciatis aut quasi magnam quidem perferendis nulla nam, ipsa praesentium assumenda vo ab." />
                    )
                }
            </div>
        </>
    )
}
