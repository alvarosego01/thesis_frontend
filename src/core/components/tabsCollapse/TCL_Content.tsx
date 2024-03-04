import { FC } from "react";

interface TCL_Content_Props_I {
    children: React.ReactNode;
}

export const TCL_Content: FC<TCL_Content_Props_I> = ({
    children
}) => {
  return (
    <>
        {/* {children} */}
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate doloremque consequunt
        </div>
    </>
  )
}
