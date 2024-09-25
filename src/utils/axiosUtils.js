import axios from "axios";

const getTimestamp = () => {
    var now = new Date();
    return Math.floor(now.getTime() / 1000);
};

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_TEST_HOST,
    timeout: 5000,
});

const axiosIpInstance = axios.create({
    timeout: 3000,
});

const getAccessToken = () => {
    return localStorage.getItem("access_token");
};

const getIP = async () => {
    const response = await getIpFirst();
    if (response.result === "Y") {
        return response.data;
    } else {
        return "0.0.0.0";
    }
};

const getIpFirst = async () => {
    try {
        const response = await axiosIpInstance.get("https://geolocation-db.com/json/");
        return { result: "Y", data: response.data.IPv4 };
    } catch (error) {
        // console.log("Ip first error : ", error);
        return { result: "N", code: "101", message: "Network Error", response: error };
    }
};
const sendGetRequest = async (uri, params) => {
    try {
        const response = await axiosInstance.get(`/${uri}`, {
            params: {
                ...params,
                timestamp: getTimestamp(),
            },
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
        return { result: "Y", response: response.data };
    } catch (error) {
        // console.log("sendGetRequest error : ", error);
        return { result: "N", code: "101", message: "Network Error", response: error };
    }
};

const sendGetRequestWithToken = async (uri, params) => {
    try {
        const response = await axiosInstance.get(`/${uri}`, {
            params: {
                ...params,
                timestamp: getTimestamp(),
            },
            headers: {
                Authorization: getAccessToken(),
            },
        });
        checkSessionError(response.data);
        return { result: "Y", response: response.data };
    } catch (error) {
        // console.log("sendGetRequestWithToken error : ", error);
        return { result: "N", code: "101", message: "Network Error", response: error };
    }
};

const sendPostRequest = async (uri, data) => {
    try {
        const response = await axiosInstance.post(`/${uri}`, {
            ...data,
            timestamp: getTimestamp(),
        });
        return { result: "Y", response: response.data };
    } catch (error) {
        // console.log("sendPostRequest error : ", error);
        return { result: "N", code: "101", message: "Network Error", response: error };
    }
};

const sendPostRequestWithToken = async (uri, data) => {
    try {
        const response = await axiosInstance.post(
            `/${uri}`,
            {
                ...data,
                timestamp: getTimestamp(),
            },
            {
                headers: {
                    Authorization: getAccessToken(),
                },
            }
        );
        checkSessionError(response.data);
        return { result: "Y", response: response.data };
    } catch (error) {
        // console.log("sendPostRequestWithToken error : ", error);
        return { result: "N", code: "101", message: "Network Error", response: error };
    }
};

const sendPostRequestWithParams = async (uri, params, data) => {
    try {
        const response = await axiosInstance.post(`/${uri}`, data, {
            params: { ...params },
            headers: {
                Authorization: getAccessToken(),
            },
        });
        checkSessionError(response.data);
        return { result: "Y", response: response.data };
    } catch (error) {
        // console.log("sendPostRequestWithToken error : ", error);
        return { result: "N", code: "101", message: "Network Error", response: error };
    }
};

const sendPutRequest = async (uri, data) => {
    try {
        const response = await axiosInstance.put(
            `/${uri}`,
            {
                ...data,
                timestamp: getTimestamp(),
            },
            {
                headers: {
                    Authorization: getAccessToken(),
                },
            }
        );
        checkSessionError(response.data);
        return { result: "Y", response: response.data };
    } catch (error) {
        // console.log("sendDeleteRequest error : ", error);
        return { result: "N", code: "101", message: "Network Error", response: error };
    }
};

const sendDeleteRequest = async (uri, data) => {
    try {
        const response = await axiosInstance.delete(`/${uri}`, data, {
            headers: {
                Authorization: getAccessToken(),
            },
        });
        checkSessionError(response.data);
        return { result: "Y", response: response.data };
    } catch (error) {
        // console.log("sendDeleteRequest error : ", error);
        return { result: "N", code: "101", message: "Network Error", response: error };
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
// axiosInstance.interceptors.response.use(
//     (response) => {
//         const config = response.config;
//         if (config.method === "get") {
//             console.log("REQ ==== ", config.method, config.url, config.params, config);
//         } else {
//             console.log("REQ ==== ", config.method, config.url, config.data);
//         }
//         console.log("RES ==== ", response.data);
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export {
    sendGetRequest,
    sendPostRequest,
    sendPutRequest,
    sendDeleteRequest,
    getTimestamp,
    sendGetRequestWithToken,
    sendPostRequestWithToken,
    sendPostRequestWithParams,
    getAccessToken,
    axiosInstance,
    getIP,
};
