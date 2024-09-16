import { Payment_Account_I } from "@tesis-project/dev-globals/dist/modules/user/interfaces"
import { FC, useEffect, useState } from "react"
import { PaymentInfo } from "../../../../hireConfig/components"

interface Props_I {
    payment_accounts: Payment_Account_I[];
    pre_selected?: string;
    can_select?: boolean;
    select_account: (index: Payment_Account_I) => void;
}

export const AccountSelector: FC<Props_I> = ({
    payment_accounts = [],
    select_account,
    pre_selected = '',
    can_select = true
}) => {

    const [isMounted, setisMounted] = useState(false);

    const [indexSelect, setindexSelect] = useState<number>(-1)

    const select_paymentAccount = (index: number) => {

        if (can_select === false) return;
        setindexSelect(index);
        select_account(payment_accounts[index]);

    }

    const set_selectedStyle = (index: number): string => {

        if (index === indexSelect) {
            return 'border !border-indigo-500 rounded-xl'
        }

        return ''

    }

    useEffect(() => {

        if (isMounted === false) return;

        if (pre_selected) {
            const index = payment_accounts.findIndex((data) => data._id === pre_selected);
            setindexSelect(index);
        }

    }, [isMounted, pre_selected]);

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <>
            <div className="grid grid-cols-12 gap-5 paymentInfo">
                {
                    payment_accounts.map((data, index) => {
                        return (
                            <div onClick={() => select_paymentAccount(index)} key={index} className={`col-span-full sm:col-span-6 xl:col-span-4 hover:cursor-pointer ${set_selectedStyle(index)}`}>
                                <PaymentInfo options={false} props={data} index={index} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}
