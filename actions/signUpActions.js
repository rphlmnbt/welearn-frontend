import { NAME_CHANGE } from "../constants";

export const changeName = (values) => ({
    type: NAME_CHANGE,
    payload: values
})
