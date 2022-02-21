import { NAME_CHANGE } from "../constants";

const initialState = {
    firstName: '',
    lastName: ''
}

const signUpReducer = (state = initialState, action) => {
    switch(action.type) {
        case NAME_CHANGE:
            return {
                firstName:action.payload.firstName,
                lastName:action.payload.lastName
            };
        default:
            return state;
    }
}


export default signUpReducer