import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, Modal  } from 'react-native';
import Background from '../../assets/images/find-bg.svg'
import Room from '../../assets/images/room.png'
import {Picker} from '@react-native-picker/picker';
import sessionService from '../../services/session.service';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import Loading from '../../components/Loading';
import invitationService from '../../services/invitation.service';

  export default function UserChooseSession({route, navigation}) {
    const [selectedSession, setSelectedSession] = useState(null);
    const [sessions, setSessions] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const uuid_user = useSelector(state => state.user.uuid_user)
    const uuid_partner = useSelector(state => state.partner.uuid_user)
    const stats = useSelector(state => state.partner.stats)
    const [openModal, setOpenModal] = useState(false);
    const [dupModal, setDupModal] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
               sessionService.getSessions(uuid_user)
               .then(response => {
                   setSessions(response.data)
                   setLoading(false)
               })
        }, [])
    );
    
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const handleSubmit = () =>{
        console.log(selectedSession)
        console.log(uuid_user)
        if (selectedSession == null) {
            setOpenModal(true)
        } else {
            invitationService.sendInvitation(selectedSession,uuid_user, uuid_partner)
            .then(response => {
                console.log(response.data)
                if(response.status == 200) {
                    //navigation.navigate('UserDashboard')
                } else {
                    setDupModal(true)
                }
            }).catch(error=> {
                setDupModal(true)
            })
        }   
    }

    const createNewSession = () => {
        navigation.navigate('UserCreateSession')
    }
    
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
                            <Text style={styles.text5}>Failed! There is no existing session at the moment. Please try creating a new session.</Text>
                            <TouchableOpacity style={styles.button3} onPress={() => setOpenModal(false)}>
                                <Text style={styles.buttontext}>Try Again</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={dupModal}
                    >
                        <View style={styles.modalContainer}>
                            <Text style={styles.text5}>An invitation has already been sent to this user!</Text>
                            <TouchableOpacity style={styles.button3} onPress={() => setDupModal(false)}>
                                <Text style={styles.buttontext}>Try Again</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                    <View style={styles.half}>
                    <Background
                        style={styles.background}
                        resizeMode="cover" 
                    />
                    
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.text1}>Hello, Student!</Text>
                        <Text style={styles.text2}>Pick A Study Session</Text>
                        <Image
                            source={Room}
                            style={styles.images}
                        />
                    </View>
                    
                    <View style={styles.userdetails}>
                        <Text style={styles.text4}>Choose Existing Session</Text>
                        <Text style={styles.text3}>
                            Sessions
                        </Text>
                        <View style={styles.picker}>
                            <Picker
                                selectedValue={selectedSession}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedSession(itemValue)
                            }>
                                <Picker.Item label={"Pick A Session"} value={null} color="black" />
                                {sessions.map(element => {
                                    return <Picker.Item key={element.uuid_session} label={element.session_name} value={element.uuid_session} color="black" />
                                })}
                            </Picker> 
                        </View>
                        <View style={styles.buttonstyle}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={handleSubmit}
                                    >
                                    <Text style={styles.buttontext}>Submit</Text>
                                </TouchableOpacity>
                        </View>
                        <Text style={styles.text4}>-OR-</Text>
                        <View style={styles.buttonstyle}>
                                <TouchableOpacity
                                    style={styles.button2}
                                    onPress={createNewSession}
                                    >
                                    <Text style={styles.buttontext}>Create New Session</Text>
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
        height: '55%',
        padding: 25,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        
    },
    text1 : {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        fontSize: 14,
        marginBottom: 5,
       
        
    },

    text2 : {
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        fontSize: 16,
        marginBottom: 10
        

    },
    text3 : {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 16,
        marginBottom: 0,
        marginTop: 10,
        
    },

    text4: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 16,
        marginBottom: 0,
        marginTop: 18,
        textAlign: 'center'
        
    },
    header:{
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingHorizontal: 30,
      paddingVertical: 0,
      margin: 0,
      height: "35%",
      width: "100%"


    },
    images: {
      width: "45%",
      height: undefined,
      aspectRatio: 1,
      alignSelf: 'center',
      borderRadius: 10,
      borderWidth: 1,
      marginBottom: 10
    },

    picker:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding: 0,
        width: '100%',
        marginVertical: 5,
        height: 42,
        marginTop: 0
    },
    button: {
        backgroundColor: '#FE4D71',
        width: '30%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        marginTop: 25,
        justifyContent:'center',
        alignItems:'center'
        
    },
    button2: {
        backgroundColor: '#FE4D71',
        width: undefined,
        paddingHorizontal: 15,
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        marginTop: 25,
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
    datePicker: {
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        width: '100%',
        height: 42,
        marginVertical: 5,
        justifyContent: 'center',
        padding:8,
    },
    pickerText: {
        color: 'black',
        fontFamily: 'Poppins_400Regular',
        letterSpacing: 0.3
    },
    textinput1:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding:8,
        width: '100%',
        marginVertical: 5,
        height: 42
    },

    modalContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: '40%',
        margin: 20,
        backgroundColor: "#F2F2F2",
        borderRadius: 5,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    text5: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 16,
        alignItems: 'center',
        
    },

    button3: {
        backgroundColor: '#EF4765',
        width: '50%',
        height: 35,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10
    },
});