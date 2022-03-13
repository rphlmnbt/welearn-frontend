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
    sender,
    uuid_user
) => {
    return axios.post(INV_URL + '/add', {
        uuid_session,
        sender,
        uuid_user
    })
}

const acceptInvitation = (
    uuid_invitation,
    uuid_user
 ) => {
    return axios.post(INV_URL + '/accept', {
        uuid_invitation,
        uuid_user
    })
}

const rejectInvitation = (
    uuid_invitation,
    uuid_user
 ) => {
    return axios.post(INV_URL + '/reject', {
        uuid_invitation,
        uuid_user
    })
}

export default {
    getInvitations,
    sendInvitation,
    acceptInvitation,
    rejectInvitation
}