import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import axios from 'axios'
import {API_URL} from '@env'

const DEVICE_URL = API_URL + '/device'

const registerForPushNotificationsAsync = async  () => {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
}

const setDevice = (uuid_user, expoPushToken) => {
  axios.put(DEVICE_URL + `/${uuid_user}`, {
    expoPushToken
  }).then(response => {
    console.log(response)
  })
  .catch(error => {
      console.log(error)
  })
} 

export default {
    registerForPushNotificationsAsync,
    setDevice
  };
  