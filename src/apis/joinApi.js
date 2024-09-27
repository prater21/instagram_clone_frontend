import { sendPostRequest, checkError } from "../utils/axiosUtils";

/**
 * 2001
 * 회원 가입 
 * @param {*} data
 * @returns
 */
export const postJoinApi = async (data) => {
    const response = await sendPostRequest("signup", data);
    return response;

};
