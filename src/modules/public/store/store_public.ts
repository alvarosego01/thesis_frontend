
import { combineReducers } from "@reduxjs/toolkit";
import { P_userProfileSlice, P_userSearchSlice, P_vacantsPageSlice } from ".";



export const publicReducer = combineReducers({
    // profile: profileSlice.reducer,
    user_search: P_userSearchSlice.reducer,
    user_profile: P_userProfileSlice.reducer,
    vacants_page: P_vacantsPageSlice.reducer
});
