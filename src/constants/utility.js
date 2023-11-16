import store from "../redux/store";
//update object immutably
export const updateObject = (oldState, updatedProperties) => {
    return {
        ...oldState,
        ...updatedProperties,
    };
};