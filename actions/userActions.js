import { LOGIN, SET_IMAGE, SET_INTEREST, SET_STATUS, UPLOAD_IMAGE } from "../constants";


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

export const uploadImage = (values) => ({
    type: UPLOAD_IMAGE,
    payload: values
})


