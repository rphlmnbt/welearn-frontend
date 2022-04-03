import { BIRTH_CHANGE, NAME_CHANGE, EMAIL_CHANGE, CONTACT_CHANGE, SCHOOL_CHANGE, COURSE_CHANGE, HABITS_CHANGE, IMAGE_CHANGE, INTEREST_CHANGE, VERIFICATION_CODE_CHANGE } from "../constants";

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
    src: null,
    interest: '',
    verificationId: ''
}

const signUpReducer = (state = initialState, action) => {
    switch(action.type) {
        case NAME_CHANGE:
            return {
                ...state,
                firstName:action.payload.firstName,
                lastName:action.payload.lastName
            };
        case BIRTH_CHANGE:
            return {
                ...state,
                birthDate:action.payload.birthDate,
                gender:action.payload.gender
            }
        case EMAIL_CHANGE:
            return {
                ...state,
                email:action.payload.email,
                password:action.payload.password
            }
        case CONTACT_CHANGE:
            return {
                ...state,
                contactNumber:action.payload.contactNumber,
                verificationId:action.payload.verificationId
            }
        case SCHOOL_CHANGE:
            return {
                ...state,
                university:action.payload.university
            }
        case COURSE_CHANGE:
            return {
                ...state,
                course:action.payload.course,
                yearLevel:action.payload.yearLevel
            }
        case HABITS_CHANGE:
            return {
                ...state,
                q1:action.payload.q1,
                q2:action.payload.q2,
                q3:action.payload.q3,
                q4:action.payload.q4,
                q5:action.payload.q5,
                q6:action.payload.q6,
                q7:action.payload.q7,
            }
        case IMAGE_CHANGE:
            return{
                ...state,
                src:action.payload
            }
        case INTEREST_CHANGE:
            return{
                ...state,
                interest:action.payload.interest
            }
        default:
            return state;
    }
}


export default signUpReducer