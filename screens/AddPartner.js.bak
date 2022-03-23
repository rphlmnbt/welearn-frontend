import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image,  } from 'react-native';
import Background from '../assets/images/find-bg.svg'
import AvatarImg from '../assets/images/avatar.png'
import AppLoading from 'expo-app-loading';


import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

  export default function AddPartner({navigation}) {
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
            </View>
            <Image
                source={AvatarImg}
                style={styles.images}
            />
            <View style={styles.design1}/>
            <View style={styles.design2}/>
            <View style={styles.userdetails}>
                <Text style={styles.text1}>
                   Name, Year Level, Course
                </Text>
            </View>

              
       </View>
        );
    }
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%' 
    },
    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 428/295,
        position: 'absolute',
        bottom: 0
        
    },
    half: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 0,
        elevation: 0,
        bottom: 0
    },
    userdetails: {
        backgroundColor: 'white',
        width: '80%',
        height: '10%',
        padding: 25,
        position: 'absolute',
        bottom: '23%',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    text1 : {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 15,
        marginBottom: 2
        
    },

    text2: {
        fontFamily: 'Poppins_400Regular',
        color: '#BBBBBB',
        fontSize: 12,
        marginBottom: 2
        
    },
    text3: {
        fontFamily: 'Poppins_500Medium',
        color: '#EF4765',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 2
    },
    text4 : {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 12,
        marginBottom: 2,
        marginTop: 5
        
    },
    header:{
      alignItems: 'center',
      marginTop: '30%'

    },
    images: {
      width: '80%',
      height: '45%',
      marginTop: '45%',
      borderRadius: 0,
      borderWidth: 1,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    },

    user: {
        alignItems: 'center',
        marginBottom: 20,
    },

    design1: {
        backgroundColor: 'white',
        width: '78%',
        height: '5%',
        padding: 25,
        position: 'absolute',
        bottom: '21.5%',
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        opacity: 0.8,

    },

    design2: {
        backgroundColor: 'white',
        width: '77%',
        height: '5%',
        padding: 25,
        position: 'absolute',
        bottom: '20%',
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        opacity: 0.5,

    },
});