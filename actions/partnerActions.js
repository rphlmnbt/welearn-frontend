import { SET_PARTNER, INTEREST, STATUS } from "../constants";

export const setPartner = (values) => ({
    type: SET_PARTNER,
    payload: values
})

export const interest = (values) => ({
    type: INTEREST,
    payload: values
})

export const status = (values) => ({
    type: STATUS,
    payload: values
})