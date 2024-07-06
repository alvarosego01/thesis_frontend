
import { FC } from "react"
import { ContractListMain, SidebarSelector } from "../components"
import { useNavigate } from "react-router-dom";
import { Content_FullPage_LY } from "../../../Layouts";


export const ContractsListPage: FC = () => {

    const navigate = useNavigate();

    const _onClick = () => {

        navigate('/dashboard/contracts/new-contract');

    }

    return (

             <Content_FullPage_LY
                 title="Lista de contratos"
                 children={
                    <>
                         <SidebarSelector />
                          <ContractListMain />
                    </>
                 }
                 button={{
                     text: 'Crear nuevo',
                     icon: 'bx bx-plus',
                     onClick: _onClick,
                 }}
             />


    )

}
