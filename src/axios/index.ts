import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { AxiosRequestConfig } from "axios";
import { PROXY_BACKEND_URL } from "./constants";
export const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);

const axiosInstance = axios.create();


const axiosInstanceRequestInterceptor = async (
    config: InternalAxiosRequestConfig
) => {
    config.baseURL = PROXY_BACKEND_URL
    config.headers.setAuthorization('')
    return config
}

axiosInstance.interceptors.request.use(
    axiosInstanceRequestInterceptor
)

export const customInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig
): Promise<T> => {
    const source = axios.CancelToken.source();
    const promise = axiosInstance({
        ...config,
        ...options,
        cancelToken: source.token,
    })
        .then(({ data }) => data)
        .catch((error) => {
            if (axios.isAxiosError(error)) {
                return Promise.reject(error as AxiosError);
            }
            return Promise.reject(error);
        });
    //@ts-ignore
    promise.cancel = () => {
        source.cancel("Query canceled");
    };
    return promise;
};
