import { LOGIN } from "../constants";

export const logIn = (values) => ({
    type: LOGIN,
    payload: values
})