import axios from 'axios'
import {API_URL} from '@env'

const RATING_URL = API_URL + '/rating'

const rateUser = (
    uuid_user,
    rated_user,
    rating,
    uuid_session
) => {
    return axios.post(RATING_URL+'/add',{
        uuid_user,
        rated_user,
        rating,
        uuid_session
    })
}

export default {
    rateUser
}