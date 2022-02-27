import { FIND, INTEREST, STATUS } from "../constants";

export const find = (values) => ({
    type: FIND,
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