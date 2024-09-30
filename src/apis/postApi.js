import { sendPostRequestFormData } from "../utils/axiosUtils";

/**
 * upload image
 * @param {*} data
 * @returns
 */
export const postUploadImg = async (data) => {
    const response = await sendPostRequestFormData("post/img/upload", data);
    return response;

};
