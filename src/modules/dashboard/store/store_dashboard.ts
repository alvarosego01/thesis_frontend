import { combineReducers } from "@reduxjs/toolkit";
import { profileSlice, userSlice } from ".";


export const dashboardReducer = combineReducers({
    profile: profileSlice.reducer,
    user: userSlice.reducer,
});
