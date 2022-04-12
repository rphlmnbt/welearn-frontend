import React, {useState, useEffect} from 'react';
import { Platform } from 'react-native';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Text, Modal, Animated  } from 'react-native';
import Background from '../../assets/images/find-bg.svg'
import userService from '../../services/user.service';
import { useSelector, useDispatch } from 'react-redux';
import { setPartner, setReload, setStudyPartners, setSize, setCount } from '../../actions/partnerActions';
import { useFocusEffect } from '@react-navigation/native';
import {Picker, PickerIOS} from '@react-native-picker/picker';
import IOSPicker from 'react-native-ios-picker'
import Room from '../../assets/images/room-alt.png'
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import BottomNav from '../../components/BottomNav';
import UserInfo from '../../components/UserInfo';
import Stats from '../../components/Stats';
import Loading from '../../components/Loading';
import mlService from '../../services/ml.service';
import sessionService from '../../services/session.service';

export default function UserSessionType({navigation}) {
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(true);
    const [selectedSession, setSelectedSession] = useState(null);
    const [sessions, setSessions] = useState(null);
    const uuid_user = useSelector(state => state.user.uuid_user)
    const [openModal, setOpenModal] = useState(false);
    const [pickerModal, setPickerModal] = useState(false);
    const [pickerOpacity, setPickerOpacity] = useState(0)
    const [opacityOfOtherItems, setOpacityOfOtherItems] = useState(1)
    const [platform, setPlatform] = useState(null)


    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    useFocusEffect(
        React.useCallback(() => {
               sessionService.getSessions(uuid_user)
               .then(response => {
                   setSessions(response.data)
                    if(Platform.OS === 'ios'){
                        setPlatform('ios')
                    } else if (Platform.OS === 'android'){
                        setPlatform('android')
                    }
                   setLoading(false)
               })
        }, [])
    );

    const loadGroup = () => {
        if (selectedSession == null) {
            setOpenModal(true)
        } else if (platform == 'ios'){
            const session = sessions.filter(element => element.uuid_session.includes(selectedSession))
            console.log(session)
            navigation.navigate('UserFindPartner', {session : session})
        } else {
            console.log(selectedSession)
            navigation.navigate('UserFindPartner', {session : selectedSession})
        }

    }
    
    const loadGroupIOS = (session) => {
        console.log(session.session_name)
        showPicker()
        navigation.navigate('UserFindPartner', {session : session})
    }
    
    const showPicker = () => {
        setPickerModal(!pickerModal)
    }


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
                
                    
                   
                <View style={styles.userdetails}>
                    <Text style={styles.text4}>Find partners for an existing session</Text>
                    
                    <Image
                        source={Room}
                        style={styles.images}
                    />
                    <Text style={styles.text3}>
                        Choose Session
                    </Text>
                    {platform == 'android' &&
                        <View>
                            <View style={styles.picker}>
                                <Picker
                                    selectedValue={selectedSession}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedSession(itemValue)
                                }>
                                    <Picker.Item label={"Pick A Session"} value={null} color="black" />
                                    {sessions.map(element => {
                                        return <Picker.Item key={element.uuid_session} label={element.session_name} value={element} color="black" />
                                    })}
                                </Picker> 
                            </View>
                            <View style={styles.buttonstyle}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={loadGroup}
                                >
                                    <Text style={styles.buttontext}>Pick Session</Text>
                                </TouchableOpacity>
                            </View>
                        </View>    
                    }
                            
                    {platform == 'ios' && 
                        <View>
                             <Modal
                                animationType="slide"
                                transparent={true}
                                visible={pickerModal}
                            >
                                
                                <View style={styles.modalContainer}>
                                    <View style={{width: '100%'}}>
                                        {sessions.map(element => {
                                                return <TouchableOpacity
                                                            style={styles.pickerItem}
                                                            key={element.uuid_session}
                                                            onPress={() => loadGroupIOS(element)}
                                                        >
                                                            <Text style={styles.text3}>{element.session_name}</Text>
                                                        </TouchableOpacity>
                                        })}
                                    </View>
                                    <View style={[styles.buttonstyle, {width: '100%', borderTopWidth: 1, borderColor: '#ACACAC'}]}>
                                            <TouchableOpacity
                                                style={styles.button}
                                                onPress={showPicker}
                                            >
                                                <Text style={styles.buttontext}>Go Back</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </Modal>
                            <View style={styles.buttonstyle}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={showPicker}
                                    >
                                        <Text style={styles.buttontext}>Load Sessions</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>    
                    }
                   <View>
                        <View
                            style={{
                                borderBottomColor: '#ACACAC',
                                borderBottomWidth: 2,
                                marginVertical: 10,
                                marginBottom: 20
                            }}
                        />
                        <View style={styles.buttonstyle}>
                                <Text style={styles.text4}>Find Study Partners for a new session</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {navigation.navigate('UserFindPartner', {session : null})}}
                                >
                                <Text style={styles.buttontext}>New Session</Text>
                                </TouchableOpacity>
                        </View>
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
    pickerItem: {
        width: '100%',
        padding: 8,
        justifyContent: 'center',
        //alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ACACAC'
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
        fontSize: 14,
        marginBottom: 0,
        marginTop: 0,
        
    },

    text4: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 16,
        marginBottom: 0,
        marginTop: 0,
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
      borderWidth: 0,
      marginBottom: 0
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
        width: '50%',
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
        backgroundColor: '#FE4D71',
        width: '90%',
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