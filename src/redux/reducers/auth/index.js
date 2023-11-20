import * as actionTypes from "../../../constants/actionTypes";
import { updateObject } from "../../../constants/utility";

const initialState = {
    persisting: true,
    loading: false,
    data: null,
    loggedIn: false,
    error: null,
};

const loginStart = (state) => {
    return updateObject(state, {
        loading: true,
    });
};

const loginSuccess = (state, data) => {
    return updateObject(state, {
        loading: false,
        data: data,
        loggedIn: true,
        error: null,
    });
};

const loginFail = (state, error) => {
    return updateObject(state, {
        loading: false,
        loggedIn: false,
        error: error,
    });
};

const logout = (state) => {
    return updateObject(state, {
        data: null,
        loggedIn: false,
    });
};

const userData = (state, data) => {
    return updateObject(state, {
        persisting: false,
        data,
        loggedIn: data != null,
    });
};

const reducer = (state = initialState, action) => {
    const { data, error } = action;
    switch (action.type) {

        case actionTypes.LOGIN_START:
            return loginStart(state);
        case actionTypes.LOGIN_SUCCESS:
            return loginSuccess(state, data);
        case actionTypes.LOGIN_FAIL:
            return loginFail(state, error);
        case actionTypes.LOGOUT:
            return logout(state);
        case actionTypes.AUTH_USER_DATA:
            return userData(state, data);
        default:
            return state;
    }
};

export default reducer;
