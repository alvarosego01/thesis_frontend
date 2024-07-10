import { useAuthStore, useProfileStore, useUserStore } from '@store/index';






interface useSession_I {

    emit_clear_all_data: () => void;
}

export const useSession = (): useSession_I => {

    const {
        emit_clear_user
    } = useUserStore();

    const {
        emit_clear_profile
    } = useProfileStore()

    const emit_clear_all_data = () => {

        emit_clear_user();
        emit_clear_profile();

    }

    return {

        emit_clear_all_data
    }

}