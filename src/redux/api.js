import axios from "axios";

const BASE_URL = "http://localhost:5000";

const api = axios.create({
    baseURL: BASE_URL,
});

export const loginUser = async (credentials, dispatch) => {
    try {
        dispatch({ type: "LOGIN_REQUEST" });

        const response = await api.post("/admin/login", credentials);

        dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });

    } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
};
