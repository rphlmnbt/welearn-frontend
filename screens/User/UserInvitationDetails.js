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
import { Modal } from 'react-native-paper';
import UserList from '../../components/UserList';
import AnonUserList from '../../components/AnonUserList';

  export default function UserInvitationDetails({route, navigation}) {
    const {session} = route.params
    const IMG_URL = API_URL +'/image/'
    const [isLoading, setLoading] = useState(true);
    const uuid_user = useSelector(state => state.user.uuid_user)
    const [openModal, setOpenModal] = useState(false);
    const users = session.users

    const acceptInvitation = () => {
        invitationService.acceptInvitation(session.uuid_invitation, uuid_user)
        .then(response => {
            if(response.status == 200) {
                navigation.navigate('UserDashboard')
            } else if (response.status == 400) {
                setOpenModal(true)
            }
            
        }).catch(error => {
            setOpenModal(true)
        })
        
    }

    const rejectInvitation = () => {
        invitationService.rejectInvitation(session.uuid_invitation, uuid_user)
        navigation.navigate('UserDashboard')
    }

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
             <Modal
                     animationType="slide"
                     transparent={true}
                     visible={openModal}
                 >
                <View style={styles.modalContainer}>
                    <Text style={styles.text4}>Failed! You already have a session with the same date and time.</Text>
                    <TouchableOpacity style={styles.button2} onPress={() => setOpenModal(false)}>
                        <Text style={styles.buttontext}>Exit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("UserAllReservations")}>
                        <Text style={styles.buttontext}>View Reservations</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.half}>
               <Background
                   style={styles.background}
                   resizeMode="cover" 
               />
            </View>
            <ScrollView style={styles.userdetails}>
                <View style={styles.qrContainer}>
                    <Text style={styles.headerText}>You are invited to {session.session_name}</Text>
                </View>
                <View style={styles.textsection}>
                    <View style={styles.usertext}>
                        <Text style={styles.info}>Date: {session.date}</Text>
                        <Text style={styles.info}>Time: {session.time}</Text>
                        <Text style={styles.info}>Room Name: {session.room.room_name}</Text>
                        <Text style={styles.info}>Invited By: Anonymous</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={acceptInvitation}
                        >
                            <Text style={styles.buttontext}>Join Session</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={rejectInvitation}
                        >
                            <Text style={styles.buttontext}>Reject Session</Text>
                        </TouchableOpacity>
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
                            return  <TouchableOpacity key={element.uuid_user} onPress={() => navigation.navigate('UserAnonPartnerDetails', {uuid_partner: element.uuid_user})}>
                                <AnonUserList element={element} />
                            </TouchableOpacity>
                           
                                
                                          
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
    button: {
        backgroundColor: '#FE4D71',
        width: '45%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        marginTop: 20,
        marginBottom: 20,
        justifyContent:'center',
        alignItems:'center'
        
    },
    button2: {
        backgroundColor: '#ACACAC',
        width: '45%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        marginTop: 20,
        marginBottom: 20,
        justifyContent:'center',
        alignItems:'center'
        
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3,
    },

    buttonstyle:{
        alignItems: 'center',

    },
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
        justifyContent: 'space-around',
        width: '100%'
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
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 25
    },
    header:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginVertical: 15
    },

});