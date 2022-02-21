import { NAME_CHANGE, BIRTH_CHANGE } from "../constants";

export const changeName = (values) => ({
    type: NAME_CHANGE,
    payload: values
})

export const changeBirth = (values) => ({
    type: BIRTH_CHANGE,
    payload: values
})
