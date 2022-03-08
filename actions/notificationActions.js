import { SET_TOKEN } from "../constants";

export const setToken = (values) => ({
    type: SET_TOKEN,
    payload: values
})