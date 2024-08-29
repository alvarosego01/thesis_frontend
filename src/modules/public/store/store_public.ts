
import { combineReducers } from "@reduxjs/toolkit";
import { P_userSearchSlice } from ".";



export const publicReducer = combineReducers({
    // profile: profileSlice.reducer,
    user_search: P_userSearchSlice.reducer,
});
