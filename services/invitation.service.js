import axios from 'axios'
import {API_URL} from '@env'

const INV_URL = API_URL + '/invitation'

const getInvitations = (
    uuid_user
) => {
    return axios.get(INV_URL + `/user/${uuid_user}`)
}

const sendInvitation = (
    uuid_session,
    uuid_user
) => {
    return axios.post(INV_URL + '/add', {
        uuid_session,
        uuid_user
    }).then(response => {
        console.log(response)
    })
    .catch(error => {
        //TODO: handle the error when implemented
    })
}

const acceptInvitation = (
    uuid_invitation,
    uuid_user
 ) => {
    return axios.post(INV_URL + '/accept', {
        uuid_invitation,
        uuid_user
    }).then(response => {
        console.log(response.data)
    })
    .catch(error => {
        //TODO: handle the error when implemented
    })
}

const rejectInvitation = (
    uuid_invitation,
    uuid_user
 ) => {
    return axios.post(INV_URL + '/reject', {
        uuid_invitation,
        uuid_user
    }).then(response => {
        console.log(response.data)
    })
    .catch(error => {
        //TODO: handle the error when implemented
    })
}

export default {
    getInvitations,
    sendInvitation,
    acceptInvitation,
    rejectInvitation
}