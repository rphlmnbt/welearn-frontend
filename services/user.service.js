import axios from 'axios'
import {API_URL} from '@env'

const AUTH_URL =  API_URL + '/auth'

const updateInterest = (
    uuid_user,
    interest) => {
    return axios.put(AUTH_URL + `/update/${uuid_user}`, {
        interest
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
}

const updateStatus = (
    uuid_user,
    isActive) => {
    return axios.put(AUTH_URL + `/update/${uuid_user}`, {
        isActive
    }).then(response => {
        console.log(response.data)
    }).catch(error => {
        console.log(error)
    })
}

const uploadImage = (
    uuid_user,
    src) => {
    return axios.put(AUTH_URL + `/update/${uuid_user}`, {
        src
    }).then(response => {
        console.log(response.data)
    }).catch(error => {
        console.log(error)
    })
}





// eslint-disable-next-line import/no-anonymous-default-export
export default {
  updateInterest,
  updateStatus,
  uploadImage
};
