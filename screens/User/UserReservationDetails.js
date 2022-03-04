import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Text  } from 'react-native';
import Background from '../../assets/images/find-bg.svg'
import { faUserCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import userService from '../../services/user.service';
import QRCode from 'react-native-qrcode-svg';
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
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

  export default function UserReservationDetails({route, navigation}) {
    const {session} = route.params
    const IMG_URL = API_URL +'/image/'
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
    const [profilePic, setProfilePic] = useState(null)
    const myUuid = useSelector(state => state.user.uuid_user)
    const users = session.users

    useEffect(() => {
        console.log(users)
        setLoading(false)
    }, [])


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
            <ScrollView style={styles.userdetails}>
                <View style={styles.qrContainer}>
                    <Text style={styles.headerText}>{session.session_name} QR Code</Text>
                    <QRCode
                        size={150}
                        value={session.uuid_session}
                    />
                </View>
                <View style={styles.textsection}>
                    <View style={styles.usertext}>
                        <Text style={styles.info}>Date: {session.date}</Text>
                        <Text style={styles.info}>Time: {session.time}</Text>
                        <Text style={styles.info}>Room Name: {session.room.room_name}</Text>

                    </View>
                    <View
                        style={{
                            borderBottomColor: '#ACACAC',
                            borderBottomWidth: 2,
                            marginVertical: 10
                        }}
                    />
                    <View style={styles.usersContainer}>
                        <Text style={styles.membersText}>Session Members</Text>
                        {users.map(element => {
                            return  <View style={styles.header} key={element.uuid_user}>
                                {element.user_detail.src != null &&
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri:  IMG_URL + element.uuid_user + '?' + new Date()+ '?' + new Date()
                                        }}
                                    />
                                }
                                {element.user_detail.src == null &&
                                    <FontAwesomeIcon icon={faUserCircle} size={80} color={'#EF4765'}/>
                                }
                                <View key={element.uuid_user} style={styles.infoContainer}>
                                        <Text style={styles.nameText}>{element.user_detail.first_name} {element.user_detail.last_name}</Text>
                                        <Text style={styles.infoText}>{element.user_detail.course}</Text>
                                        <Text style={styles.infoText}>{element.user_detail.year_level}</Text>
                                        <Text style={styles.infoText}>{element.user_detail.interest}</Text>
                                </View>
                            </View>
                                
                                          
                        })}
                    </View> 
                </View>
            </ScrollView>
        </View>
        );
    }
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    membersText: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#EF4765',
        fontSize: 16,
    },
    usersContainer: {
        width: '100%',
        margin: 0
    },
    qrContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
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
        height: '90%',
        padding: 30,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    headerText : {
        fontFamily: 'Poppins_600SemiBold',
        color: '#EF4765',
        fontSize: 18,
        marginBottom: 5
        
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
    textsection:{
        flexDirection: 'column',   
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
    },

    usertext:{
        flexDirection: 'column',
        marginBottom: 5,
    },

    info:{
        fontSize: 14,
        fontFamily: 'Poppins_600SemiBold',
        color: "#5e5e5e"
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
        
    },
    infoContainer: {
        paddingLeft: 20
    },  
    nameText : {
        marginTop: 5,
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 18,
        
    },
    infoText: {
        fontFamily: 'Poppins_400Regular',
        color: '#777777',
        fontSize: 12
        
    },
    statusContainer: {
        flexDirection: 'row'
    },
    image : {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginTop: 10
    },
    header:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginVertical: 15
    },

});