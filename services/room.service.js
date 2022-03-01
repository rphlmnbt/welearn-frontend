import axios from 'axios'
import {API_URL} from '@env'

const ROOM_URL = API_URL + '/room'

const getRooms = () => {
    return axios.get(ROOM_URL)
}

export default {
    getRooms
}