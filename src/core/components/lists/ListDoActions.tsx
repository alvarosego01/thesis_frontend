
import { FC } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export interface List_I {
    title: string;
    icon?: {
        type: 'icon' | 'image';
        icon: string;
    },
    action: {
        type: 'link' | 'function';
        action?: string;
        // onClick?: () => void;
    },
    type: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info'
    line?: {
        top?: boolean;
        bottom?: boolean;
    }
}

export interface ListDoActions_Props_I {
    list: List_I[],
    onClick?: (action: string) => void;
}
export const ListDoActions: FC<ListDoActions_Props_I> = ({
    list,
    onClick
}) => {

    const navigate = useNavigate();

    const set_typeButton = (button: List_I): string => {

        switch (button.type) {
            case 'primary':
                return 'text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400';
            case 'secondary':
                return 'text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200';
            case 'danger':
                return 'text-rose-400 hover:text-rose-500';
            case 'warning':
                return 'bg-yellow-500 hover:bg-yellow-600 dark:hover:bg-yellow-400 text-white';
            case 'success':
                return 'bg-green-500 hover:bg-green-600 dark:hover:bg-green-400 text-white';
            case 'info':
                return 'bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-400 text-white';
            default:
                return 'bg-indigo-500 hover:bg-indigo-600 dark:hover:bg-indigo-400 text-white';
        }

    }

    const set_line = (button: List_I): string => {

        if (!button.line) return '';

        let line: string = 'border-t border-slate-200 dark:border-slate-600';
        if (button?.line?.top) {
            line = `border-t border-slate-200 dark:border-slate-600 ${line} pt-1 mt-2`;
        }
        if (button?.line?.bottom) {
            line = `${line} border-b border-slate-200 dark:border-slate-600 pb-1 mb-2`;
        }

        return line;

    }

    const _onClick = (action: List_I['action']) => {

        // console.log('clickea opcion', action);
        if (action.type === 'link' && action.action) {
            console.log('action.action', action.action);
            navigate(action.action);
        } else {

            if (action.type === 'function' && onClick && action.action) {
                onClick(action.action)
            }

        }
    };

    return (
        <ul>
            {
                list.length > 0 && list.map((item, index) => (
                    <li key={item.title} className={`leading-normal hover:cursor-pointer ${set_line(item)}`}>
                        <a
                            onClick={() => _onClick(item.action)}
                            className={`flex items-center px-0 py-2 text-12p font-medium leading-normal ${set_typeButton(item)} `}>
                            <div className="mr-2 icon">
                                {
                                    item.icon && (
                                        item.icon?.type === 'icon' ? (
                                            <i className={item.icon.icon}></i>
                                        ) : (
                                            <img src={item?.icon?.icon} alt={item.title} className="w-5 h-5" />
                                        )
                                    )
                                }
                            </div>
                            <span>
                                {item.title}
                            </span>
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}
