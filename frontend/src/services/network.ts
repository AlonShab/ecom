import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from "axios";
import apiConfig from "../config/apiConfig";

export interface TitleResponse {
    title: string;
}

export class NetworkService {
    private static instance: NetworkService;
    private axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create(apiConfig)
    }

    public static getInstace(): NetworkService {
        if (!this.instance) {
            this.instance = new NetworkService();
        }

        return this.instance;
    }

    private async request<T>(url: string, method: Method, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.axiosInstance.request<T>({
                url,
                method,
                data,
                ...config,
            });
            return response.data;
        } catch (error) {
            console.error(`[API Error] ${method.toUpperCase()} ${url}:`, error);
            throw error;
        }
    }

    public getTitle = async (): Promise<TitleResponse> => {
        return this.request<TitleResponse>('title', 'GET');
    }

}