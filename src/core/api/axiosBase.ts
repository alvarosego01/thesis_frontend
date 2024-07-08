import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { envs } from '../config/envs';

const baseURL: string = envs.api_url;

const Backend_Api: AxiosInstance = axios.create({
    baseURL: baseURL
});

Backend_Api.interceptors.request.use((config: any) => {

    const token = localStorage.getItem('token') || '';
    if (config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
    } else {
        config.headers = {
            'Authorization': `Bearer ${token}`,
        };
    }
    return config;

});

Backend_Api.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError) => {

        console.error(`Api - Error:`, error)
        return Promise.reject<AxiosError>(error as AxiosError);

    });


export default Backend_Api;