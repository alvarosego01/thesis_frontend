import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { navigationState_I, on_restoreDefault, on_setPageNavigation } from '../reducers/navigation/navigationSlice';
import { Reducers_I } from "../store";




interface useHookStore_I {
    state: navigationState_I;
    emit_restoreDefault: () => void;
    emit_setPageNavigation: (page: string) => void;
}

export const useNavigationStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Reducers_I, navigationState_I>(({ global }) => global.navigation, shallowEqual);

    const emit_restoreDefault = () => {

        dispatch(on_restoreDefault());

    }

    const emit_setPageNavigation = (page: string) => {

        // remove '/'

        let aux_page: string = 'home';

        if(page !== '/'){
            aux_page = page.replace('/', '') as string;
        }

        dispatch(on_setPageNavigation(aux_page))

    }

    return {
        // state
        state,

        // methods
        emit_restoreDefault,
        emit_setPageNavigation,

    }

}