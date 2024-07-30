import { combineReducers } from "@reduxjs/toolkit";
import { hiringDataSlice, profileSlice, userMetaSlice, userSlice } from ".";


export const dashboardReducer = combineReducers({
    profile: profileSlice.reducer,
    user: userSlice.reducer,
    hiring_data: hiringDataSlice.reducer,
    user_meta: userMetaSlice.reducer
});
