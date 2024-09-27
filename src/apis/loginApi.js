import { sendGetRequest, sendPostRequest, sendPostRequestFormData, checkError, sendPostRequestWithToken } from "../utils/axiosUtils";


/**
 * 
 * 로그인 
 * @param {*} data
 * @returns
 */
export const postLoginApi = async (data) => {
    const response = await sendPostRequestFormData("login", data);
    return response;

};
