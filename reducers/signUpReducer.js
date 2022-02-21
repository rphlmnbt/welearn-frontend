import { BIRTH_CHANGE, NAME_CHANGE } from "../constants";

const initialState = {
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: ''
}

const signUpReducer = (state = initialState, action) => {
    switch(action.type) {
        case NAME_CHANGE:
            return {
                firstName:action.payload.firstName,
                lastName:action.payload.lastName
            };
        case BIRTH_CHANGE:
            return {
                birthDate:action.payload.birthDate,
                gender:action.payload.gender
            }
        default:
            return state;
    }
}


export default signUpReducer