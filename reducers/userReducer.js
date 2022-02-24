import { LOGIN, SET_INTEREST, SET_STATUS } from "../constants";

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
    activeStatus: '',
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
                uuid_user: action.payload.uuid_user,
                email: action.payload.email,
                first_name:action.payload.first_name,
                last_name:action.payload.last_name
                //ITUOLOY MO
            };
         case SET_INTEREST:
            return {
                ...state,
                interest:action.payload.interest
            };

        case SET_STATUS:
            return {
                    ...state,
                    activeStatus:action.payload.activeStatus
                };
        default:
            return state;
    }
}


export default userReducer