import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image,  } from 'react-native';
import Background from '../assets/images/find-bg.svg'
import AvatarImg from '../assets/images/avatar.png'
import AppLoading from 'expo-app-loading';
import * as Progress from 'react-native-progress';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

  export default function FindPartner({navigation}) {
    const categories = [
        "Time Management",
        "Study Environment",
        "Exam Preparation",
        "Note Taking",
        "Reading Skills",
        "Writing Skills",
        "Math Skills"
    ]

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
            {/* <Image
                source={AvatarImg}
                style={styles.images}
            /> */}
            <View style={styles.userdetails}>
                <View style={styles.user}>
                <FontAwesomeIcon icon={faUserCircle} size={100} color={'#EF4765'}/>
                </View>
                <Text style={styles.text1}>
                   Name, Year Level, Course
                </Text>
                <Text style={styles.text2}>
                    This student is looking to study this topic: Calculus
                </Text>
                <Text style={styles.text3}>
                    Study Habits
                </Text>
                <Text style={styles.text4}>
                    Time Management
                </Text>
                <Progress.Bar progress={0.5} width={null} color='#EF4765'/>
                <Text style={styles.text4}>
                    Study Environment
                </Text>
                <Progress.Bar progress={0.5} width={null} color='#EF4765'/>
                <Text style={styles.text4}>
                    Exam Preparation
                </Text>
                <Progress.Bar progress={0.2} width={null} color='#EF4765'/>
                <Text style={styles.text4}>
                    Note Taking
                </Text>
                <Progress.Bar progress={0.3} width={null} color='#EF4765'/>
                <Text style={styles.text4}>
                    Reading Skills
                </Text>
                <Progress.Bar progress={0.4} width={null} color='#EF4765'/>
                <Text style={styles.text4}>
                    Writing Skills
                </Text>
                <Progress.Bar progress={0.5} width={null} color='#EF4765'/>
                <Text style={styles.text4}>
                    Math Skills
                </Text>
                <Progress.Bar progress={0.5} width={null} color='#EF4765'/>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('PickStudyRoom')}>
                            <Image
                            style={styles.images}
                            source={require('../assets/images/check-button.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                            <Image
                            style={styles.images}
                            source={require('../assets/images/next.png')} />
                    </TouchableOpacity>
                </View>
            </View>
           
            {/* <View style={styles.menucontainer}>
                  <View style={styles.row}>
                    <View style={styles.column}>
                      <TouchableOpacity onPress={() => navigation.navigate('PickStudyRoom')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/check-button.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                      <TouchableOpacity onPress={() => navigation.navigate('FindStudyRoom')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/next.png')} />
                      </TouchableOpacity>
                    </View>
                    </View>
                    </View> */}

              
       </View>
        );
    }
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
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
        height: '80%',
        position: 'absolute',
        zIndex: 0,
        elevation: 0,
        bottom: 0
    },
    userdetails: {
        backgroundColor: 'white',
        width: '100%',
        height: '83%',
        padding: 25,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
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
      width: 100,
      margin: 10,
      marginTop: 20
    },

    user: {
        alignItems: 'center',
        marginBottom: 20,
    },
    menucontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '55%',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    column: {
      flexDirection: 'column',
      width: '35%',
    },
});