import { LOGIN, SET_INTEREST, SET_STATUS, UPLOAD_IMAGE } from "../constants";

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
    image: '',
    isActive: '',
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
            const profilePic = null
            if (action.payload.src != null) {
                profilePic = 'http://192.168.100.111:8080/api/image/' + action.payload.uuid_user
            }
            return {
                ...state,
                uuid_user: action.payload.uuid_user,
                email: action.payload.email,
                first_name:action.payload.first_name,
                last_name:action.payload.last_name,
                gender:action.payload.gender,
                contact_number:action.payload.contact_number,
                university:action.payload.university,
                course:action.payload.course,
                year_level:action.payload.year_level,
                interest:action.payload.interest,
                image: profilePic,
                isActive:action.payload.isActive,
                stats:action.payload.stats
            };
         case SET_INTEREST:
            return {
                ...state,
                interest:action.payload
            };

        case SET_STATUS:
            return {
                ...state,
                isActive:action.payload
            };
        case UPLOAD_IMAGE:
            return {
                ...state,
                image:action.payload
            };
        default:
            return state;
    }
}


export default userReducer