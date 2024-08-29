import { navigationState_I } from "./reducers/navigation/navigationSlice";
import { Slice_authState_I } from "./reducers/session/auth/authSlice";
import { Slice_requestsState_I } from "./reducers/session/auth/requestsSlice";
import { Session_notificationsState_I } from "./reducers/session/notifications/notificationsSlice";
import { uiState_I } from "./reducers/ui/uiSlice";



export interface Core_Reducers_I {
    global: {
        ui: uiState_I;
        navigation: navigationState_I;
        session: {
            auth: Slice_authState_I;
            notifications: Session_notificationsState_I;
            requests: Slice_requestsState_I;
        }
    }
}
