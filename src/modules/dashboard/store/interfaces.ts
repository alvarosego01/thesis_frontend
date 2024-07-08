import { Session_profileState_I } from "./reducers/profile/profileSlice";
import { Slice_userState_I } from "./reducers/user/userSlice";


export interface Dashboard_Reducers_I {
    dashboard: {
        user: Slice_userState_I;
        profile: Session_profileState_I;
    }
}
