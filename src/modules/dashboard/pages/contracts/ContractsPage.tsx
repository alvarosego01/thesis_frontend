
import { FC } from "react"
import { Content_FullPage_LY } from "../../Layouts";

export const ContractsPage: FC = () => {
    return (
        <Content_FullPage_LY
            title="Lista de contratos"
            children={''}
            button={{
                text: 'Crear nuevo',
                icon: 'bx bx-plus',
                onClick: () => console.log('click'),
            }}
        />
    )
}

export default ContractsPage;