import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image,  } from 'react-native';
import Background from '../assets/images/find-bg.svg'
import AvatarImg from '../assets/images/avatar.png'
import AppLoading from 'expo-app-loading';
import * as Progress from 'react-native-progress';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import userService from '../services/user.service';
import { useSelector, useDispatch } from 'react-redux';
import { setPartner, setReload, setStudyPartners, setSize, setCount } from '../actions/partnerActions';
import {API_URL} from '@env'
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import BottomNav from '../components/BottomNav';
import UserInfo from '../components/UserInfo';
import Stats from '../components/Stats';
  export default function FindPartner({navigation}) {
    const dispatch = useDispatch()

    const uuid_user = useSelector(state => state.user.uuid_user)

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const firstName = useSelector(state => state.partner.first_name)
    const lastName = useSelector(state => state.partner.last_name)
    const course = useSelector(state => state.partner.course)
    const yearLevel = useSelector(state => state.partner.year_level)
    const interest = useSelector(state => state.partner.interest)
    const profilePic = useSelector(state => state.partner.image)
    const stats = useSelector(state => state.partner.stats)
    const reload = useSelector(state => state.partner.reload)
    const studyPartners = useSelector(state => state.partner.studyPartners)
    const resultSize = useSelector(state => state.partner.resultSize)
    const count = useSelector(state => state.partner.count)

    useEffect(() => {
        if(reload) {
            userService.loadStudyPartners(uuid_user)
            .then(response => {
                dispatch(setStudyPartners(response.data))
                dispatch(setSize(response.data.length))
                dispatch(setPartner(response.data[count]))
                dispatch(setReload(false))
            })
        }
    }, [])

    const nextPartner = () => {
        if (count == resultSize-1) {
            dispatch(setPartner(studyPartners[0]))
            dispatch(setCount(0))
        } else {
            dispatch(setPartner(studyPartners[count+1]))
            dispatch(setCount(count+1))
        }
    }

    if (!fontsLoaded && studyPartners === null) {
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
            <View style={styles.userdetails}>
                <View style={{marginTop: '5%'}}>
                    <UserInfo profilePic={profilePic} firstName={firstName} lastName={lastName} course={course} yearLevel={yearLevel} interest={interest} isActive={true} />
                </View>
                
                <Stats stats={stats} />
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('FindStudyRoom')}>
                            <Image
                            style={styles.images}
                            source={require('../assets/images/check-button.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={nextPartner}>
                            <Image
                            style={styles.images}
                            source={require('../assets/images/next.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            
           <BottomNav/>   
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
        paddingBottom: 50,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 0,
        paddingTop: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
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
      width: 80,
      height: 80,
      margin: 30,
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