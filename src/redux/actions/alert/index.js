import * as actionTypes from "../../../constants/actionTypes";

export const showAlert = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SHOW_ALERT,
            data,
        });
    };
};

export const showProgressBar = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SHOW_PROGRESSBAR,
            data,
        });
    };
};
export const hideAlert = () => {
    return async (dispatch) => {
        dispatch({
            type: actionTypes.HIDE_ALERT,
        });
    };
};
