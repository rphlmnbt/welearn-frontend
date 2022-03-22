import axios from 'axios'
import {API_URL} from '@env'

const AUTH_URL =  API_URL + '/auth'


const signUp = (
    first_name,
    last_name,
    birth_date,
    gender,
    email,
    password,
    contact_number,
    university,
    course,
    year_level,
    interest,
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7) => {
    return axios.post(AUTH_URL+ '/signup', {
        email,
        password,
        first_name,
        last_name,
        birth_date,
        gender,
        contact_number,
        university,
        course,
        year_level,
        interest,
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7
    })
}

const signIn = (
    email,
    password) => {
    return axios.post(AUTH_URL + '/signin', {
        email,
        password
    })
}

const signInMobile = (
    contact_number,
    password) => {
        console.log(AUTH_URL)
    return axios.post(AUTH_URL + '/signinMobile', {
        contact_number,
        password
    })
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signUp,
  signIn,
  signInMobile
};
