import { Media_I } from "@tesis-project/dev-globals/dist/modules/media/interfaces";
import Swal from "sweetalert2";
import { start_getFile } from "../thunks/useUiThunks";



interface Toast_I {
    type: "success" | "error" | "info" | "warning";
    message: string;
}

interface useUiGlobals_I {

    emit_swalToast: ({ type, message }: Toast_I) => void;

}

export const useUiGlobals = (): useUiGlobals_I => {


    const emit_swalToast = ({ type, message }: Toast_I) => {

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: type,
            title: message
        });

    }


    return {

        // Methods
        emit_swalToast,

    }

}