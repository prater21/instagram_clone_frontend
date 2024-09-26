import { sendPostRequest, checkError } from "../utils/axiosUtils";

/**
 * 2001
 * 회원 가입 (TV QR 스캔 후, 모바일을 이용한 회원가입)
 * @param {*} data
 * @returns
 */
export const postJoinApi = async (data) => {
    const response = await sendPostRequest("signup", data);
    return checkError(response);
};
