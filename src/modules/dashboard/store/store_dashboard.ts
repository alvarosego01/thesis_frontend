import { combineReducers } from "@reduxjs/toolkit";
import { contractsSlice, hiringDataSlice, profileSlice, userMetaSlice, userSlice } from ".";


export const dashboardReducer = combineReducers({
    profile: profileSlice.reducer,
    user: userSlice.reducer,
    hiring_data: hiringDataSlice.reducer,
    user_meta: userMetaSlice.reducer,
    contracts: contractsSlice.reducer
});
