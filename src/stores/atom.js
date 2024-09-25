// atom.js
import { atom } from "recoil";

export const alertAtomState = atom({
    key: "isModalOpen",
    default: {
        isOpen: false,
        type: "alert",
        title: "",
        body: "",
        topBody: "",
        onPress: undefined,
        onCancel: undefined,
        buttonText: {
            cancelText: "button.cancel",
            actionText: "button.ok",
        },
    },
});

export const langAtomState = atom({
    key: "language",
    default: localStorage.getItem("lang") || process.env.REACT_APP_LANG,
});

export const joinAtomState = atom({
    key: "join",
    default: {
        ip_addr: null,
        login_type: null,
        sns_id: null,
        email: null,
        phone: null,
        nick_name: null,
        country: null,
        qr_key: null,
        qr_timestamp: null,
        marketing_info_collect: 0,
        marketing_info_receive: 0,
        isEmail: null,
    },
});

export const userAtomState = atom({
    key: "user",
    default: {
        uid: null,
        access_token: null,
        subscribe: 0,
    },
});
