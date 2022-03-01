import axios from 'axios'
import {API_URL} from '@env'

const INV_URL = API_URL + '/invitation'

const getInvitations = (
    uuid_user
) => {
    return axios.get(INV_URL + `/user/${uuid_user}`)
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
    getInvitations
}