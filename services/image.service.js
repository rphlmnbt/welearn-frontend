import axios from 'axios'
import {API_URL} from '@env'

const IMG_URL =  API_URL + '/image'


const uploadImage = async (image, uuid_user) => {
    try {
        const data = new FormData();
        data.append("image", image);
        data.append("uuid", uuid_user)
        await fetch(IMG_URL, {
          method: "POST",
          body: data,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          }
        });
      } catch (error) {
        console.log(error);
      }
}

export default {
    uploadImage
};