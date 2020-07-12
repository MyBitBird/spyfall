import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import Config from "../config";

const instance = axios.create();
let onLoadingChanged: (status: boolean) => void = () => {};

instance.defaults.baseURL = Config.API_BASE_URL;

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.common["Authorization"] = `${token}`;

  onLoadingChanged(true);
  return config;
});

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    onLoadingChanged(false);
    return response;
  },
  function (error: AxiosError) {
    onLoadingChanged(false);
    //TODO lging errors
    return Promise.reject(error);
  }
);

export const onLoadingChangedEvent = (callback: (status: boolean) => void) => {
  onLoadingChanged = callback;
};

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
};
