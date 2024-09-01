import axios, { AxiosError } from "axios";
import { AxiosRequestConfig } from "axios";
export const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);

const axiosInstance = axios.create();



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
