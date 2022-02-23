import { LOGIN, SET_INTEREST } from "../constants";

const initialState = {
        uuid_user: '',
        email: '',
        first_name: '',
        last_name: '',
        gender: '',
        contact_number: '',
        university: '',
        course: '',
        year_level: '',
        interest: '',
        stats: [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
    }

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user:action.payload
            };
         case SET_INTEREST:
            return {
                ...state,
                user:action.payload
            };
        default:
            return state;
    }
}


export default userReducer