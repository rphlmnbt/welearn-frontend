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
    })
}

const getSessions = (
    uuid_user
) => {
    return axios.get(SESSION_URL + `/user/${uuid_user}`)
}

const getFinishedSessions = (
    uuid_user
) => {
    return axios.get(SESSION_URL + `/user/finished/${uuid_user}`)
}

const getAllSessions = (
) => {
    return axios.get(SESSION_URL)
}





export default {
    createSession,
    getSessions,
    getFinishedSessions,
    getAllSessions

}
