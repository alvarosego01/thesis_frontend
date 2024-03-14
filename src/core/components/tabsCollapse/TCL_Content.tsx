import { FC } from "react";

interface TCL_Content_Props_I {
    children: React.ReactNode;
}

export const TCL_Content: FC<TCL_Content_Props_I> = ({
    children
}) => {
  return (
    <div className="TCL_Content">
        {children}
    </div>
  )
}
