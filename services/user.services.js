import axios from 'axios'
import {API_URL} from '@env'

const AUTH_URL =  API_URL + '/auth'

const updateInterest = (
    uuid_user,
    interest) => {
    return axios.post(`${API_URL}/update/${uuid_user}`, {
        interest
    })
}

const updateStatus = (
    uuid_user,
    activeStatus) => {
    return axios.post(`${API_URL}/update/${uuid_user}`, {
        activeStatus
    })
}




// eslint-disable-next-line import/no-anonymous-default-export
export default {
  updateInterest,
  updateStatus
};
