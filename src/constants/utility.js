import store from "../redux/store";
//update object immutably
export const updateObject = (oldState, updatedProperties) => {
    return {
        ...oldState,
        ...updatedProperties,
    };
};

export const getAccessToken = () => {
    const authState = store.getState().auth;
    let token = authState.data?.access_token;
    if (token) {
        token = `Bearer ${token}`;
    }

    return token;
};

export const canAccess = (menu, action) => {
    const { data: userData } = store.getState().auth;
    // console.log("userData", userData)
    return userData?.accesses?.[menu]?.includes(action);
};
