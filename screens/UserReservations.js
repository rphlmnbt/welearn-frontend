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
        roomNumber: 'Study Room 1',
        image: require('../assets/images/room.png'),
        time: '3:00 PM - 4:00 PM',
        info: 'SFJ Library',
    },
    {
        id: '2',
        roomNumber: 'Study Room 2',
        image: require('../assets/images/room.png'),
        time: '4:00 PM - 5:00 PM',
        info: 'SFJ Library',
    },
    {
        id: '3',
        roomNumber: 'Study Room 3',
        image: require('../assets/images/room.png'),
        time: '5:00 PM - 6:00 PM',
        info: 'SFJ Library',
    },
    {
        id: '4',
        roomNumber: 'Study Room 4',
        image: require('../assets/images/room.png'),
        time: '6:00 PM - 7:00 PM',
        info: 'SFJ Library',
    }

  ];



export default function UserReservations({navigation}) {
   
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
                    <View style={styles.usercontainer}>             
                        <Text style={styles.text2}>Study Room Reservations</Text>
                        <FlatList
                        data = {userdata}
                        keyExtractor={item=>item.id}
                        renderItem={({item}) => (
                            <TouchableOpacity>
                            <View style={styles.userdetails}>
                            <Image
                            style={styles.images}
                            source={item.image} />
                            <View style={styles.textsection}>
                                <View style={styles.usertext}>
                                    <Text style={styles.name}>{item.roomNumber}</Text>
                                    <Text style={styles.Timerequest}>{item.time}</Text>
                                </View>
                                <Text  style={styles.userinfo}>{item.info}</Text>
                            </View>
                            </View>
                            </TouchableOpacity>
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
        color: '#ACACAC',  
    },
    
    text2 : {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        color: '#5E5E5E',
        alignSelf: 'flex-start' 
    },

    usercontainer:{
        alignItems: 'center',
        padding: 20
    },

    userdetails:{
        width: '100%',
        height: 100,
        flexDirection: 'row',   
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15,
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