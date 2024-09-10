
import { FC } from "react"
import { NavModel } from '../../../interfaces/navs.interfaces';

import './NavBarsItems.sass';
import { PrimaryButton } from "../../buttons/PrimaryButton";
import { SecondaryButton } from "../../buttons/SecondaryButton";


interface Props_I {
    navs: NavModel[],
    onClick?: (action: NavModel['action']) => void
}

export const NavBarsItems: FC<Props_I> = ({
    navs,
    onClick
}) => {

    const onClick_Action = (action: NavModel['action']) => {
        onClick && onClick(action);
    }

    const set_type_element = (element: NavModel) => {


        switch (element.type) {

            case 'regular':
                return (<a className={element.type} onClick={() => onClick_Action(element.action)}>{element.title}</a>)

            case 'primary_button':
                return (
                    <PrimaryButton onClick={() => onClick_Action(element.action)} label={element.title} />
                );

            case 'secondary_button':
                return (
                    <SecondaryButton onClick={() => onClick_Action(element.action)} label={element.title}  />
                );

            default:
                return (<></>)
                break;
        }

    }

    const show_items = (items: NavModel[]) => {
        return (
            <>
                {
                    items.map((element, index) => (
                        (element.children && element.children.length > 0) ? (
                            <li key={index}>
                                <details className='bg-transparent'>
                                    <summary>{element.parent}</summary>
                                    <ul className="p-1">
                                        {
                                            element.children.map((child, index) => (
                                                show_items(child?.children!)
                                            ))
                                        }
                                    </ul>
                                </details>
                            </li>
                        ) : (
                            <li key={index}>
                                { set_type_element(element) }
                            </li>
                        )
                    ))
                }
            </>
        )
    }

    return (
        <>
            <ul className="items-center h-16 px-1 my-auto space-x-2 menu menu-horizontal">
                { show_items(navs) }
            </ul>
        </>
    )
}
