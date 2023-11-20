import axios from "axios";
import { LOCAL_USER_KEY } from "../constants/keys";
import store from "../redux/store";
import { showAlert } from "../redux/actions/alert";
import { showProgressBar } from "../redux/actions/alert";

const instance = axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: process.env.URL,
    timeout: 30000,
});

instance.interceptors.request.use(
    (config) => {
        store.dispatch(showProgressBar(true));
        const authState = store.getState().auth;
        const token = authState.data?.access_token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => {
        store.dispatch(showProgressBar(false));
        return response.data;
    },
    (error) => {
        store.dispatch(showProgressBar(false));
        if (error.response?.status === 401 || error.response?.status === 403) {
            localStorage.removeItem(LOCAL_USER_KEY);
            window.location = "/login";
        } else {
            store.dispatch(
                showAlert({
                    message:
                        error.response.data.message || error.message || error.response.data,
                    type: "danger",
                    show: true,
                })
            );

            return Promise.reject(
                error.response?.data || { message: "Network error!" }
            );
        }
    }
);


export default instance;
