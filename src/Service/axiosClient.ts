import axios, { AxiosError } from "axios";
import store from "configStore";

const axiosClient = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn/api",
    headers: {
        TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIxMS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzA3MTY4MDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MDg2NDQwMH0.hImF3FD5ezlSpmo_fyOBeTlwLGcUfxyEeZIRIddaRFE"
    },
});

// axiosClient.get = <T>(url: string, config: AxiosRequestConfig) => axiosClient.get<any, T>(url, config);

axiosClient.interceptors.request.use(
    (config) => {
        if (config.headers) {
            const { accessToken = "" } = store.getState().auth.user || {}
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`
            }
        }
        return config;
    }

)
axiosClient.interceptors.response.use(
    (respone) => {
        return respone.data.content;
    },
    (error: AxiosError<{ content: string }>) => {
        return error.response?.data?.content;
        // return {
        //     ...error,
        //     respone: {
        //         data: error.respone.data.content
        //     }
        // };
    }

)
export default axiosClient;