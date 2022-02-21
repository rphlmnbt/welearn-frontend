import { BIRTH_CHANGE, NAME_CHANGE, EMAIL_CHANGE, CONTACT_CHANGE, SCHOOL_CHANGE, COURSE_CHANGE, HABITS_CHANGE } from "../constants";

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
    yearLevel: '',
    q1:0,
    q2:0,
    q3:0,
    q4:0,
    q5:0,
    q6:0,
    q7:0,
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
        case HABITS_CHANGE:
            return {
                q1:action.payload.q1,
                q2:action.payload.q2,
                q3:action.payload.q3,
                q4:action.payload.q4,
                q5:action.payload.q5,
                q6:action.payload.q6,
                q7:action.payload.q7,
            }
        default:
            return state;
    }
}


export default signUpReducer