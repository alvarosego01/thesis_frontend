import { Session_profileState_I } from "./reducers/profile/profileSlice";
import { Session_userState_I } from "./reducers/user/userSlice";


export interface Dashboard_Reducers_I {
    dashboard: {
        user: Session_userState_I;
        profile: Session_profileState_I;
    }
}
