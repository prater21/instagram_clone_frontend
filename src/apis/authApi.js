import { checkError, sendPostRequest } from "../utils/axiosUtils";

/**
 *
 * send verification email
 * @param {*} data
 * @returns
 */
export const postSendEmail = async (data) => {
    const response = await sendPostRequest("email/authcode/send", data);
    return response;

};

/**
 *
 * confirm verification eamil
 * @param {*} data
 * @returns
 */
export const postConfirmEmail = async (data) => {
    const response = await sendPostRequest("email/authcode/confirm", data);
    return response;

};



/**
 *
 * check email
 * @param {*} data
 * @returns
 */
export const postCheckEmail = async (data) => {
    const response = await sendPostRequest("email/check", data);
    return response;

};

/**
 *
 * check username
 * @param {*} data
 * @returns
 */
export const postCheckUsername = async (data) => {
    const response = await sendPostRequest("username/check", data);
    return response;
};
