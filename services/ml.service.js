import axios from 'axios'
import {API_URL} from '@env'

const ML_URL = API_URL + '/ml'

const addToDataset = (
    uuid_user,
    stats,
    out
) => {
    return axios.post(ML_URL+'/add',{
        uuid_user,
        stats,
        out
    }).then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

const loadStudyPartners = (
    uuid_user) =>{
        return axios.get(ML_URL + `/studyPartners/${uuid_user}`)
    }


const loadGroupStudyPartners = (
    users
) => {
    return axios.post(ML_URL + `/studyPartners`, {
        users
    })
}
export default {
    addToDataset,
    loadStudyPartners,
    loadGroupStudyPartners
}