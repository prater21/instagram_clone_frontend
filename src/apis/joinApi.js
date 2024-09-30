import { sendPostRequest } from "../utils/axiosUtils";

/**
 * signup
 * @param {*} data
 * @returns
 */
export const postJoinApi = async (data) => {
    const response = await sendPostRequest("signup", data);
    return response;

};
