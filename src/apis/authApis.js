import { checkError, sendPostRequest } from "../utils/axiosUtils";

/**
 *
 * send verification email
 * @param {*} data
 * @returns
 */
export const postSendEmail = async (data) => {
    const response = await sendPostRequest("auth/email", data);
    return checkError(response);
};

/**
 *
 * confirm verification eamil
 * @param {*} data
 * @returns
 */
export const postConfirmEmail = async (data) => {
    const response = await sendPostRequest("auth/email/confirm", data);
    return checkError(response);
};


/**
 *
 * reset password
 * @param {*} data
 * @returns
 */
export const postResetPassword = async (data) => {
    const response = await sendPostRequest("reset/password", data);
    return checkError(response);
};

/**
 *
 * check email
 * @param {*} data
 * @returns
 */
export const postCheckEmail = async (data) => {
    const response = await sendPostRequest("check/email", data);
    return checkError(response);
};

/**
 *
 * check username
 * @param {*} data
 * @returns
 */
export const postCheckUsername = async (data) => {
    const response = await sendPostRequest("check/username", data);
    return checkError(response);
};
