
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onRestoreDefault_P_userSearchSlice, onSetLoading_P_userSearchSlice, onSetResults_P_userSearchSlice, Slice_P_userSearchState_I } from "../../reducers/userSearchSlice";
import { Reducers_I } from "../../../../../core/store/store";
import { start_getUsers_all_userSearch, start_getUsers_byTerm_userSearch } from "./useUseSearchThunks";
import { userArtist_Type } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";

interface useHookStore_I {

    state: Slice_P_userSearchState_I;

    emit_searchUsers_all: (type: userArtist_Type) => void;
    emit_searchUsers_byTerm: (term: string) => void;
    emit_restore: () => void;

}

export const useUserSearchStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Reducers_I, Slice_P_userSearchState_I>(({ publc }) => publc.user_search, shallowEqual);

    const emit_searchUsers_all = async (type: userArtist_Type) => {

        dispatch(onSetLoading_P_userSearchSlice(true))
        try {

            const { data } = await start_getUsers_all_userSearch({
                type: type || 'all'
            });
            if (!data) return false;

            dispatch(onSetResults_P_userSearchSlice(data));

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_P_userSearchSlice(false))

    }

    const emit_searchUsers_byTerm = async (term: string) => {

        if(term === '') return;

        dispatch(onSetLoading_P_userSearchSlice(true))
        try {

            const { data } = await start_getUsers_byTerm_userSearch({
                term
            });

            dispatch(onSetResults_P_userSearchSlice(data || []));

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_P_userSearchSlice(false))

    }

    const emit_restore = () => {
        // return

        dispatch(onRestoreDefault_P_userSearchSlice())

    }

    return {
        // Attributes
        state,

        // Methods
        emit_searchUsers_all,
        emit_searchUsers_byTerm,
        emit_restore

    }

}