
import { Slice_P_userProfileState_I } from "./reducers/userProfileSlice";
import { Slice_P_userSearchState_I } from "./reducers/userSearchSlice";
import { Slice_P_vacantsPageSlice } from "./reducers/vacantsPageSlice";

export interface Public_Reducers_I {
    publc: {
        user_search: Slice_P_userSearchState_I;
        user_profile: Slice_P_userProfileState_I;
        vacants_page: Slice_P_vacantsPageSlice

    }
}


