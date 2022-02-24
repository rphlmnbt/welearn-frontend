import axios from 'axios'

const API_URL =  'http://192.168.100.111:8080/api/auth'


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
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7) => {
    return axios.post(API_URL+ '/signup', {
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
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7
    }).then(response => {
        console.log(response)
    })
    .catch(error => {
        //TODO: handle the error when implemented
    })
}

const signIn = (
    email,
    password) => {
    return axios.post(API_URL + '/signin', {
        email,
        password
    })
}

const signInMobile = (
    contact_number) => {
    return axios.post(API_URL + '/signinMobile', {
        contact_number
    })
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signUp,
  signIn,
  signInMobile
};
