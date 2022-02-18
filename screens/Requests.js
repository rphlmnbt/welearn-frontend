import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import Background from '../assets/images/requests-bg.svg'
import { FlatList } from 'react-native-gesture-handler';
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
      userimage: require('../assets/images/next.png'),
      time: '08:33 PM',
      info: 'Course, Year Level',
      },
      
      {
      id: '2',
      username: 'Malagungdili',
      userimage: require('../assets/images/next.png'),
      time: '08:33 PM',
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

                    <FlatList
                    data = {userdata}
                    keyExtractor={item=>item.id}
                    style={styles.usercontainer}
                    renderItem={({item}) => (
                        <View>
                            <Text>{item.username}</Text>
                        </View>
                    )}  
                    />
                </View>
                {/* <View style={styles.usercontainer}> */}
                    <FlatList
                    data = {userdata}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => (
                        <View>
                            <Text>{item.username}</Text>
                        </View>
                    )}  
                    />
                {/* </View> */}
               
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

    usercontainer: {
    },
})