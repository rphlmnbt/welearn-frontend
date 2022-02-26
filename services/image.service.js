import axios from 'axios'
import {API_URL} from '@env'

const IMG_URL =  API_URL + '/image'


const uploadImage = async (image, uuid_user) => {
  const data = new FormData();
  data.append("image", image);
  data.append("uuid", uuid_user)
  fetch(IMG_URL, {
    method: "POST",
    body: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    }
  });
}

const getImage = (
  uuid_user) => {
  return axios.get(IMG_URL + `/${uuid_user}`
  )
}

export default {
    uploadImage,
    getImage
};