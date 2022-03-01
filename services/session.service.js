import axios from 'axios'
import {API_URL} from '@env'

const SESSION_URL = API_URL + '/session'

const createSession = (
    session_name,
    date,
    time,
    session_creator,
    uuid_room
) => {
    return axios.post(SESSION_URL, {
        session_name,
        date,
        time,
        session_creator,
        uuid_room
    }).then(response => {
        console.log(response)
    })
    .catch(error => {
        //TODO: handle the error when implemented
    })
}

// const sendInvitation = (
//     session_name,
//     uuid_user
// ) => {
//     return axios.post(INV_URL + '/add', {
//         session_name,
//         uuid_user
//     }).then(response => {
//         console.log(response)
//     })
//     .catch(error => {
//         //TODO: handle the error when implemented
//     })
// }

export default {
    createSession
}