import { FC } from "react"
import { setLineBorders } from "../../utils";

export interface InfoList_Props_I {
    label: string;
    contain: string;
    line?: {
        top?: boolean;
        bottom?: boolean;
    }
    className?: string
}

export const InfoList: FC<InfoList_Props_I> = ({
    label,
    contain,
    line,
    className
}) => {


    return (
        <div className={`InfoList pl-2 element ${className} ${setLineBorders({ line: line })}`}>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <span className="text-sm font-semibold">{label}</span>
                </div>
                <div className="flex flex-row">
                    <span className="block text-xs font-light">{contain}</span>
                </div>
            </div>
        </div>
    )
}
