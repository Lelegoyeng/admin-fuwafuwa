import * as actionTypes from "../../../constants/actionTypes";
import { authLogin } from "../api";
import * as actions from "../../actions";
import {
    getLocalStorage,
    storeLocalStorage,
} from "../../../services/localServices";
import { LOCAL_USER_KEY } from "../../../constants/keys";


const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START,
    };
};

const loginSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        data: data,
    };
};

const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error,
    };
};

const setUserData = (data) => {
    return {
        type: actionTypes.AUTH_USER_DATA,
        data,
    };
};

export const persistAuth = () => async (dispatch) => {
    try {
        const userData = JSON.parse(getLocalStorage(LOCAL_USER_KEY));
        dispatch(setUserData(userData));
    } catch (err) {
        console.error(err.message);
    }
};

export const login = (body) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const { result, success, message } = await authLogin(body);
        // if (!success) {
        //     dispatch(
        //         actions.showAlert({
        //             message: message,
        //             show: true,
        //             type: "danger",
        //         })
        //     );
        //     throw new Error(message);
        // }

        // // Save access token
        // storeLocalStorage(LOCAL_USER_KEY, JSON.stringify(result));

        // // Login success
        // dispatch(loginSuccess(result));
        // dispatch(
        //     actions.showAlert({
        //         message: message,
        //         show: true,
        //         type: "success",
        //     })
        // );
    } catch (err) {
        dispatch(loginFail({ message: err.message }));
    }
};