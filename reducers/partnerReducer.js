import { SET_PARTNER, STATUS, INTEREST, PARTNER_RELOAD, SET_STUDYPARTNERS, SET_COUNT, SET_SIZE } from "../constants";
import {API_URL} from '@env'

const initialState = {
    studyPartners: '',
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
    stats: [
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    reload: true,
    count: 0,
    resultSize: 0
}

const IMG_URL = API_URL +'/image/'

const partnerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PARTNER:
            var profilePic = null
            if (action.payload.src != null) {
                profilePic = IMG_URL + action.payload.uuid_user
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
                stats:action.payload.stats
            };
        case INTEREST:
            return {
                ...state,
                interest:action.payload
            };

        case STATUS:
            return {
                ...state,
                activeStatus:action.payload
            };
        case PARTNER_RELOAD:
            return {
                ...state,
                reload:action.payload
            };
        case SET_STUDYPARTNERS:
            return {
                ...state,
                studyPartners:action.payload
            };
        case SET_COUNT:
            return {
                ...state,
                count:action.payload
            };
        case SET_SIZE:
            return {
                ...state,
                resultSize:action.payload
            };
        default:
            return state;
    }
}

export default partnerReducer
    