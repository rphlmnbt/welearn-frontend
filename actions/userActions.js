import { LOGIN, SET_INTEREST, SET_STATUS } from "../constants";


export const logIn = (values) => ({
    type: LOGIN,
    payload: values
})

export const setInterest = (values) => ({
    type: SET_INTEREST,
    payload: values
})

export const setStatus = (values) => ({
    type: SET_STATUS,
    payload: values
})

