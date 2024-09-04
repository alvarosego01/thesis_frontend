import { useAuthStore, useProfileStore, useUserStore } from '@store/index';
import { useNotificationsStore } from '../store/hooks/notifications/useNotificationsStore';
import { useUserMetaStore } from '../../modules/dashboard/store/hooks/user_meta/useUserMetaStore';






interface useSession_I {

    emit_clear_all_data: () => void;
    // emit_is_authenticated: () => boolean;

}

export const useSession = (): useSession_I => {


    const {
        emit_clear_user
    } = useUserStore();

    const {
        emit_clear_profile
    } = useProfileStore()

    const {
        emit_clear_notifications
    } = useNotificationsStore();

    const {
        emit_clear_userMeta
    } = useUserMetaStore();

    const emit_clear_all_data = () => {

        emit_clear_user();
        emit_clear_profile();
        emit_clear_notifications();
        emit_clear_userMeta();

    }

    return {

        emit_clear_all_data,

    }

}