// atom.js
import { atom } from "recoil";



export const toastAtomState = atom({
    key: "toast",
    default: {
        open: false,
        type: "success",
        message: ""
    },
});
