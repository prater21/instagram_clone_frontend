import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { toastAtomState } from "../stores/atom";

const useToast = () => {

    const [toastState, setToastState] = useRecoilState(toastAtomState);

    const openToast = useCallback(
        ({ type, message, open }) => {
            setToastState({
                ...toastState,
                type: type || "success",
                message: message || "Success!",
                open: open || true,

            });
        },
        [toastState]
    );


    const closeToast = useCallback(
        () => {
            setToastState({
                ...toastState,
                open: false,
            });
        },
        [toastState]
    );


    return { toastState, openToast, closeToast };
};

export default useToast;
