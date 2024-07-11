import { Slice_hiringDataState_I } from "./reducers/hiring_data/hiringDataSlice";
import { Slice_ProfileState_I } from "./reducers/profile/profileSlice";
import { Slice_userState_I } from "./reducers/user/userSlice";


export interface Dashboard_Reducers_I {
    dashboard: {
        user: Slice_userState_I;
        profile: Slice_ProfileState_I;
        hiring_data: Slice_hiringDataState_I
    }
}
