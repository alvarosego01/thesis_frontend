
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { onSetLoading_P_userSearchSlice, onSetResults_P_userSearchSlice, Slice_P_userSearchState_I } from "../../reducers/userSearchSlice";
import { Reducers_I } from "../../../../../core/store/store";
import { start_getUsers_all_userSearch } from "./useUseSearchThunks";
import { userArtist_Type } from "@tesis-project/dev-globals/dist/modules/profile/interfaces";

interface useHookStore_I {

    state: Slice_P_userSearchState_I;

    emit_searchUsers_all: (type: userArtist_Type) => void;

}

export const useUserMetaStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Reducers_I, Slice_P_userSearchState_I>(({ publc }) => publc.user_search, shallowEqual);

    const emit_getUsers_all = () => {
        return
    }

    const emit_searchUsers_all = async (type: userArtist_Type) => {
        // return
           dispatch(onSetLoading_P_userSearchSlice(true))
        try {

            const { data } = await start_getUsers_all_userSearch({
                type: type
            });
            if (!data) return false;

            console.log('data', data);

            dispatch(onSetResults_P_userSearchSlice(data));

        } catch (error) {
            console.log('error', error)

        }
        dispatch(onSetLoading_P_userSearchSlice(false))

    }

    return {
        // Attributes
        state,

        // Methods
        emit_searchUsers_all

    }

}