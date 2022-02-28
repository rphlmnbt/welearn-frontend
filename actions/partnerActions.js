import { SET_PARTNER, INTEREST, STATUS, PARTNER_RELOAD, SET_STUDYPARTNERS, SET_COUNT, SET_SIZE } from "../constants";

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

export const setReload = (values) => ({
    type: PARTNER_RELOAD,
    payload: values
})

export const setStudyPartners = (values) => ({
    type: SET_STUDYPARTNERS,
    payload: values
})

export const setCount = (values) => ({
    type: SET_COUNT,
    payload: values
})

export const setSize = (values) => ({
    type: SET_SIZE,
    payload: values
})