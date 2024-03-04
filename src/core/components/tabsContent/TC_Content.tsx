import { FC } from "react"

interface TC_Content_Props_I {
    title: string;
    children: React.ReactNode
}

export const TC_Content: FC<TC_Content_Props_I> = ({
    children
}) => {
    return (
        <div className="w-full p-2 ">
            {children}
        </div>
    )
}
