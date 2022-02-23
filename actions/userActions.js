import { LOGIN, SET_INTEREST } from "../constants";


export const logIn = (values) => ({
    type: LOGIN,
    payload: values
})

export const setInterest = (values) => ({
    type: SET_INTEREST,
    payload: values
})
