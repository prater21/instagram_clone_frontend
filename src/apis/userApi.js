import { sendPostRequest } from "../utils/axiosUtils";

/**
 * reset password
 * @param {*} data
 * @returns
 */
export const postResetPassword = async (data) => {
    const response = await sendPostRequest("/user/password/reset", data);
    return response;

};