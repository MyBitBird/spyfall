import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";

const instance = axios.create();
let onLoadingChanged: (status: boolean) => void = () => {};

instance.defaults.baseURL = 'http://localhost:5500/api/';

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  onLoadingChanged(true);
  return config;
});

instance.interceptors.response.use(
  function(response: AxiosResponse) {
    onLoadingChanged(false);
    return response;
  },
  function(error: AxiosError) {
    onLoadingChanged(false);
    //TODO lging errors
    return Promise.reject(error);
  },
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
