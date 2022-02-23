import { LOGIN } from "../constants";

const initialState = {
    uuid_user: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                uuid_user:action.payload
            };
        default:
            return state;
    }
}


export default userReducer