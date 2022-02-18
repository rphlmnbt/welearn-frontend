import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import Background from '../assets/images/requests-bg.svg'
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

  const userdata = [
      {
      id: '1',
      username: 'Malagungdili',
      userimage: require('../assets/images/user-1.png'),
      time: '08:33 PM',
      info: 'Course, Year Level',
      },
      
      {
      id: '2',
      username: 'Makayabongdili',
      userimage: require('../assets/images/user-2.png'),
      time: '08:00 PM',
      info: 'Course, Year Level',
      },

      {
        id: '3',
        username: 'Masantingdili',
        userimage: require('../assets/images/user-3.png'),
        time: '10:00 PM',
        info: 'Course, Year Level',
      },

      {
        id: '4',
        username: 'Biasangdili',
        userimage: require('../assets/images/user-4.png'),
        time: '10:30 PM',
        info: 'Course, Year Level',
      },

  ];



export default function Requests({navigation}) {
   
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                 <View style={styles.half}>
                    <Background
                        style={styles.background}
                        resizeMode="cover" 
                    />

                    <Text style={styles.text1}>Chat</Text>
                    <Text style={styles.text2}>Requests</Text>

                    <View style={styles.usercontainer}>
                    <FlatList
                    data = {userdata}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => (
                        <View style={styles.userdetails}>
                          <Image
                          style={styles.images}
                          source={item.userimage} />
                          <View style={styles.textsection}>
                              <View style={styles.usertext}>
                                 <Text style={styles.name}>{item.username}</Text>
                                 <Text style={styles.Timerequest}>{item.time}</Text>
                              </View>
                              <Text  style={styles.userinfo}>{item.info}</Text>
                         </View>
                        </View>
                    )}/>
                    </View>
                </View>
                </View>
                
        )
    }
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container : {
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingTop: 100
    },

    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 428/295,
        position: 'absolute',
        bottom: 0,
        opacity: 0.4,
        
    },
    half: {
        width: '100%',
        height: '115%',
        position: 'relative',
        zIndex: 0,
        elevation: 0,
        bottom: 0,
        
    },

    text1 : {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        textAlign: 'center',
        marginTop: '-14%',
        color: '#ACACAC',  
    },
    
    text2 : {
        fontFamily: 'Poppins_600SemiBold',
        marginLeft: 37,
        fontSize: 16,
        marginTop: '8%',
        color: '#5E5E5E',  
    },

    usercontainer:{
        alignItems: 'center'
    },

    userdetails:{
        width: '100%',
        height: 100,
        flexDirection: 'row',   
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },

    images:{
        width: 60,
        height: 60,

    },

    textsection:{
        flexDirection: 'column',   
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
    },

    usertext:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    name:{
        fontSize: 14,
        fontFamily: 'Poppins_600SemiBold',
    },

    Timerequest:{
        color: '#ACACAC',
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        paddingRight: 25,
    },

    userinfo:{
        fontSize: 14,
        color: '#ACACAC',
        
    }
    

})