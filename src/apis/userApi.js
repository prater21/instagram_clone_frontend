import { sendGetRequest, sendGetRequestWithToken, sendPostRequest, sendPostRequestWithToken } from "../utils/axiosUtils";

/**
 * reset password
 * @param {*} data
 * @returns
 */
export const postResetPassword = async (data) => {
    const response = await sendPostRequest("user/password/reset", data);
    return response;

};

/**
 * get profile
 * @param {*} data
 * @returns
 */
export const getUserProfile = async (data) => {
    const response = await sendGetRequestWithToken("user/profile", data);
    return response;

};

/**
 * get profile
 * @param {*} data
 * @returns
 */
export const postUserFollow = async (data) => {
    const response = await sendPostRequestWithToken("user/follow", data);
    return response;

};

/**
 * change password
 * @param {*} data
 * @returns
 */
export const postChangePassword = async (data) => {
    const response = await sendPostRequestWithToken("user/password/change", data);
    return response;

};


/**
 * edit user profile
 * @param {*} data
 * @returns
 */
export const postEditUserProfile = async (data) => {
    const response = await sendPostRequestWithToken("user/profile/edit", data);
    return response;

};