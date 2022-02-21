import { NAME_CHANGE, BIRTH_CHANGE, EMAIL_CHANGE, CONTACT_CHANGE, SCHOOL_CHANGE } from "../constants";

export const changeName = (values) => ({
    type: NAME_CHANGE,
    payload: values
})

export const changeBirth = (values) => ({
    type: BIRTH_CHANGE,
    payload: values
})

export const changeEmail = (values) => ({
    type: EMAIL_CHANGE,
    payload: values
})

export const changeContact  = (values) => ({
    type: CONTACT_CHANGE,
    payload: values
})

export const changeSchool = (values) => ({
    type: SCHOOL_CHANGE,
    payload: values
})
