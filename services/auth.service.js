import axios from 'axios'

const API_URL =  'http://192.168.100.111:8080/api/auth/signup'


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
    return axios.post(API_URL, {
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



// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signUp
};
