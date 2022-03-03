import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image,  } from 'react-native';
import Background from '../../assets/images/find-bg.svg';
import userService from '../../services/user.service';
import {API_URL} from '@env'
import { useSelector } from 'react-redux';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import UserInfo from '../../components/UserInfo';
import Stats from '../../components/Stats';
import Loading from '../../components/Loading';
import invitationService from '../../services/invitation.service';

  export default function UserPartnerDetails({route, navigation}) {
    const IMG_URL = API_URL +'/image/'
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
    const [profilePic, setProfilePic] = useState(null)
    const { uuid_user } = route.params;
    const { uuid_invitation } = route.params;
    const myUuid = useSelector(state => state.user.uuid_user)

    useEffect(() => {
        userService.findOneUser(uuid_user)
        .then(response => {
            console.log(response.data)
            setUser(response.data)
            if(response.data.user_detail.src != null) {
                setProfilePic(IMG_URL + response.data.uuid_user)
            } else {
                setProfilePic(null)
            }
            setLoading(false)
        })
    }, [])

    const acceptInvitation = () => {
        invitationService.acceptInvitation(uuid_invitation, myUuid)
        navigation.navigate('UserDashboard')
    }

    const rejectInvitation = () => {
        invitationService.rejectInvitation(uuid_invitation, myUuid)
        navigation.navigate('UserDashboard')
    }

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });
    if (!fontsLoaded || isLoading) {
        return <Loading />
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
                    <UserInfo profilePic={profilePic} firstName={user.user_detail.first_name} lastName={user.user_detail.last_name} course={user.user_detail.course} yearLevel={user.user_detail.year_level} interest={user.user_detail.interest} isActive={user.isActive} />
                </View>
                
                <Stats stats={[user.survey.q1,user.survey.q2,user.survey.q3,user.survey.q4,user.survey.q5,user.survey.q6,user.survey.q7]} />
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={acceptInvitation}>
                            <Image
                            style={styles.images}
                            source={require('../../assets/images/check-button.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={rejectInvitation}>
                            <Image
                            style={styles.images}
                            source={require('../../assets/images/next.png')} />
                    </TouchableOpacity>
                </View>
            </View>
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
      width: 90,
      height: 90,
      margin: 30,
      marginTop: 30
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