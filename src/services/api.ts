import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
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
    toast.dismiss();
    onLoadingChanged(false);
    return response;
  },
  function (error: AxiosError) {
    toast.dismiss();
    onLoadingChanged(false);
    showApiError(error);
    //TODO lging errors
    return Promise.reject(error);
  }
);

const showApiError = (error: AxiosError) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (expectedError) {
    if (error.response?.status === 400) toast.error(`${error.response.data}`);
    if (error.response?.status === 404) toast.error(`Not Found`);
    else if (error.response?.status === 500)
      toast.error("Internal Server Error");
  } else {
    if ((error + "").includes("Network")) toast.error("Network Error");
    else toast.error("UnExpected Error");
  }
};

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
