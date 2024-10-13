import axios from "axios";
import { getLocal } from "./common";

const getTimestamp = () => {
    var now = new Date();
    return Math.floor(now.getTime() / 1000);
};

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    timeout: 5000,
});


const sendGetRequest = async (uri, params) => {
    try {
        const response = await axiosInstance.get(`/${uri}`, {
            params: {
                ...params,
                // timestamp: getTimestamp(),
            },
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
        return { result: "Y", ...response.data };
    } catch (error) {
        const response = error.response
        return { result: "N", code: response?.status || 404, message: response?.data };
    }
};

const sendGetRequestWithToken = async (uri, params) => {
    try {
        const response = await axiosInstance.get(`/${uri}`, {
            params: {
                ...params,
                // timestamp: getTimestamp(),
            },
            headers: {
                Authorization: `Bearer ${getLocal('access_token')}`,
            },
        });
        // checkSessionError(response.data);
        return { result: "Y", ...response.data };
    } catch (error) {
        const response = error.response
        console.log('response', error)
        return { result: "N", code: response?.status || 404, message: response?.data };
    }
};

const sendPostRequest = async (uri, data) => {
    try {
        const response = await axiosInstance.post(`/${uri}`,
            {
                ...data,
                // timestamp: getTimestamp(),
            }
        );
        return { result: "Y", ...response.data };
    } catch (error) {
        const response = error.response
        return { result: "N", code: response?.status || 404, message: response?.data };
    }
};

const sendPostRequestWithToken = async (uri, data) => {
    try {
        const response = await axiosInstance.post(
            `/${uri}`,
            {
                ...data,
                // timestamp: getTimestamp(),
            },
            {
                headers: {
                    Authorization: `Bearer ${getLocal('access_token')}`,
                },
            }
        );
        checkSessionError(response.data);
        return { result: "Y", ...response.data };
    } catch (error) {
        const response = error.response
        return { result: "N", code: response?.status || 404, message: response?.data };
    }
};

const sendPostRequestFormData = async (uri, data) => {
    try {
        const response = await axiosInstance.post(`/${uri}`, data,
        );
        // checkSessionError(response.data);
        return { result: "Y", ...response.data };
    } catch (error) {
        const response = error.response
        return { result: "N", code: response?.status || 404, message: response?.data };
    }
};

const sendPutRequest = async (uri, data) => {
    try {
        const response = await axiosInstance.put(
            `/${uri}`,
            {
                ...data,
                // timestamp: getTimestamp(),
            },
            {
                headers: {
                    Authorization: `Bearer ${getLocal('access_token')}`,
                },
            }
        );
        checkSessionError(response.data);
        return { result: "Y", ...response.data };
    } catch (error) {
        const response = error.response
        return { result: "N", code: response.status || 404, message: response.data };
    }
};

const sendDeleteRequest = async (uri, data) => {
    try {
        const response = await axiosInstance.delete(`/${uri}`, data, {
            headers: {
                Authorization: `Bearer ${getLocal('access_token')}`,
            },
        });
        checkSessionError(response.data);
        return { result: "Y", ...response.data };
    } catch (error) {
        const response = error.response
        return { result: "N", code: response?.status || 404, message: response?.data };
    }
};

const checkSessionError = (data) => {
    try {
        if (data.result === "N") {
            if (data.code === 1001 || data.code === 2000 || data.code === 2001 || data.code === 2002 || data.code === 2004) {
                // console.log("User session error. Code : " + data.code + ". Message : " + data.message);
                // localStorage.removeItem("user");
                // window.location.href = linkType.linkHome;
            }
        }
    } catch (error) {
        // console.log("checkSessionError : ", error);
    }
};

export const checkError = (res) => {
    // console.log('res', res)
    if (res.result === "N") {
        return res;
    } else {
        const data = res.response;
        if (data.result === "N") {
            return { result: "N", code: data.code, message: data.message, response: data };
        } else {
            return { result: "Y", ...data };
        }
    }
};

// axiosInstance.interceptors.request.use(
//     async (config) => {
//         console.log("REQ ==== ", config);
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

/**
 * api 통신 테스트 로그 출력하고 싶을때 주석 풀고 사용하세요!
 */
axiosInstance.interceptors.response.use(
    (response) => {
        const config = response.config;
        if (config.method === "get") {
            console.log("REQ ==== ", config.method, config.url, config.params, config);
        } else {
            console.log("REQ ==== ", config.method, config.url, config.data);
        }
        console.log("RES ==== ", response.data);
        return response;
    },
    (error) => {
        const config = error.config;
        if (config.method === "get") {
            console.log("ERROR REQ ==== ", config.method, config.url, config.params, config);
        } else {
            console.log("ERROR REQ ==== ", config.method, config.url, config.data);
        }
        console.log("ERROR RES ==== ", error.response.data);
        return Promise.reject(error);
    }
);

export {
    sendGetRequest,
    sendPostRequest,
    sendPutRequest,
    sendDeleteRequest,
    // getTimestamp,
    sendGetRequestWithToken,
    sendPostRequestWithToken,
    sendPostRequestFormData,
};
