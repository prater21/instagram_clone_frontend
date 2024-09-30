import { sendPostRequestFormData, } from "../utils/axiosUtils";


/**
 * login 
 * @param {*} data
 * @returns
 */
export const postLoginApi = async (data) => {
    const response = await sendPostRequestFormData("login", data);
    return response;

};
