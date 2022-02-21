import { BIRTH_CHANGE, NAME_CHANGE, EMAIL_CHANGE, CONTACT_CHANGE, SCHOOL_CHANGE, COURSE_CHANGE } from "../constants";

const initialState = {
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    email: '',
    password: '',
    contactNumber: '',
    university: '',
    course: '',
    yearLevel: ''
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
        case EMAIL_CHANGE:
            return {
                email:action.payload.email,
                password:action.payload.password
            }
        case CONTACT_CHANGE:
            return {
                contactNumber:action.payload.contactNumber
            }
        case SCHOOL_CHANGE:
            return {
                university:action.payload.university
            }
        case COURSE_CHANGE:
            return {
                course:action.payload.course,
                yearLevel:action.payload.yearLevel
            }
        default:
            return state;
    }
}


export default signUpReducer