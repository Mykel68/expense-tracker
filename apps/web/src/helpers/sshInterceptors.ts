import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { hashToken } from "./jwtSecretGenerator";

const sshInterceptor: AxiosInstance = axios.create();
sshInterceptor.interceptors.request.use(
    async function (config: InternalAxiosRequestConfig) {
        const sshToken = encodeURIComponent(await hashToken());
        config.headers["ssh"] = sshToken;

        return config;
    },

    function (error: any) {
        return Promise.reject(error);
    },
);

export default sshInterceptor;