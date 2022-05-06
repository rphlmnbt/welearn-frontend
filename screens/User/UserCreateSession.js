import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, TextInput, Modal, Platform  } from 'react-native';
import Background from '../../assets/images/find-bg.svg'
import Room from '../../assets/images/room.png'
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import sessionService from '../../services/session.service';
import roomService from '../../services/room.service';
import { useSelector, useDispatch } from 'react-redux';
import { setReload } from '../../actions/partnerActions';
import schema from '../../schemas/createSession.schema';
import Moment from 'moment';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import { Formik } from 'formik';
import Loading from '../../components/Loading';
import invitationService from '../../services/invitation.service';

  export default function UserCreateSession({navigation}) {

    const [selectedRoom, setSelectedRoom] = useState({room_name: "Pick Room"});
    const [selectedTime, setSelectedTime] = useState('7:00 AM to 8:00 AM');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [isLoading, setLoading] = useState(true);
    const [rooms, setRooms] = useState(null)
    const [openModal, setOpenModal] = useState(false);
    const uuid_user = useSelector(state => state.user.uuid_user)
    const uuid_partner = useSelector(state => state.partner.uuid_user)
    const [dupModal, setDupModal] = useState(false);
    const [pickerModal, setPickerModal] = useState(false)
    const [timeModal, setTimeModal] = useState(false)
    const [incModal, setIncModal] = useState(false)
    const [dateModal, setDateModal] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
       roomService.getRooms()
       .then(response => {
           setRooms(response.data)
           setLoading(false)
       })
    }, [])

    const time = [
        {value: "7:00 AM to 8:00 AM"},
        {value: "8:00 AM to 9:00 AM"},
        {value: "9:00 AM to 10:00 AM"},
        {value: "10:00 AM to 11:00 AM"},
        {value: "11:00 AM to 12:00 PM"},
        {value: "12:00 PM to 1:00 PM"},
        {value: "1:00 PM to 2:00 PM"},
        {value: "2:00 PM to 3:00 PM"},
        {value: "3:00 PM to 4:00 PM"},
        {value: "4:00 PM to 5:00 PM"},
        {value: "5:00 PM to 6:00 PM"},
        {value: "6:00 PM to 7:00 PM"},
    ]

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
    };

    const showPicker = () => {
        setPickerModal(!pickerModal)
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };


    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const handleSubmit = (values) => {
        if (
            values.session_name != null &&
            selectedRoom.room_name != "Pick Room"
        ) {
            if (Platform.OS == 'ios') {
                sessionService.createSession(values.session_name, Moment(date).format('MMM D, YYYY'), selectedTime, uuid_user, selectedRoom.uuid_room)
                .then(response => {
                    if(response.status == 200) {
                        invitationService.sendInvitation(response.data.uuid_session,uuid_user, uuid_partner)
                        .then(response => {
                            if(response.status == '200') {
                                dispatch(setReload(true))
                                navigation.navigate('UserDashboard')
                            } 
                        }).catch(error=> {
                            setDupModal(true)
                        })
                    } 
                }).catch(error => {
                    setOpenModal(true)
                })
            } else {
                sessionService.createSession(values.session_name, Moment(date).format('MMM D, YYYY'), selectedTime, uuid_user, selectedRoom)
                .then(response => {
                    if(response.status == 200) {
                        invitationService.sendInvitation(response.data.uuid_session,uuid_user, uuid_partner)
                        .then(response => {
                            if(response.status == '200') {
                                dispatch(setReload(true))
                                navigation.navigate('UserDashboard')
                            } 
                        }).catch(error=> {
                            setDupModal(true)
                        })
                    } 
                }).catch(error => {
                    setOpenModal(true)
                })
            } 
        } else {
            setIncModal(true)
        }
        
    }
    if (!fontsLoaded || isLoading) {
        return <Loading />
    } else {
        return (
            <Formik
                initialValues={{
                    session_name:'',
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched  }) =>( 
                <View style={styles.container}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={openModal}
                    >
                       <View style={styles.modalParent}>
                        <View style={styles.modalContainer}>
                                <Text style={styles.text4}>Failed! The room seems to be taken or you have other sessions for the same date and time!</Text>
                                <TouchableOpacity style={styles.button2} onPress={() => setOpenModal(false)}>
                                    <Text style={styles.buttontext}>Try Again</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("UserAllReservations")}>
                                    <Text style={styles.buttontext}>View Reservations</Text>
                                </TouchableOpacity>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={incModal}
                    >
                       <View style={styles.modalParent}>
                        <View style={styles.modalContainer}>
                                <Text style={styles.text4}>Failed! Please fill up all values!</Text>
                                <TouchableOpacity style={styles.button2} onPress={() => setIncModal(false)}>
                                    <Text style={styles.buttontext}>Try Again</Text>
                                </TouchableOpacity>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={dupModal}
                    >
                        <View style={styles.modalParent}>
                            <View style={styles.modalContainer}>
                                <Text style={styles.text4}>An invitation has already been sent to this user!</Text>
                                <TouchableOpacity style={styles.button2} onPress={() => setDupModal(false)}>
                                    <Text style={styles.buttontext}>Try Again</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <View style={styles.half}>
                        <Background
                            style={styles.background}
                            resizeMode="cover" 
                        />
                        
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.text2}>Pick your discussion Room</Text>
                        <Image
                            source={Room}
                            style={styles.images}
                        />
                    </View>
                    
                    <View style={styles.userdetails}>
                        <Text style={styles.text3}>
                        Session Name
                        </Text>
                        <TextInput
                            placeholder="Session Name"
                            autoCapitalize="none"
                            style={styles.textinput1}
                            onChangeText={handleChange('session_name')}
                            onBlur={handleBlur('session_name')}
                            value={values.session_name}
                        />
                        {errors.session_name && touched.session_name &&
                            <Text style={{ fontSize: 11, color: '#EF4765', marginTop:5, marginLeft: 5 }}>{errors.session_name}</Text>
                        }
                        <Text style={styles.text3}>
                        Room Number
                        </Text>
                        { Platform.OS == 'ios'&& 
                            <View style={styles.picker}>
                                <TouchableOpacity
                                    onPress={showPicker}
                                >
                                    <Text style={styles.textinput2} >{selectedRoom.room_name|| "Pick Room"}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={pickerModal}
                        >
                            
                            <View style={styles.modalParent}>
                                <View style={styles.modalContainer}>
                                    <View style={{width: '100%'}}>
                                        {rooms.map(element => {
                                                return <TouchableOpacity
                                                            style={styles.pickerItem}
                                                            key={element.uuid_room}
                                                            onPress={() => {
                                                                setSelectedRoom(element)
                                                                setPickerModal(false)
                                                            }}
                                                        >
                                                            <Text style={styles.text3}>{element.room_name}</Text>
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
                            </View>
                        </Modal>
                        { Platform.OS == 'android' &&
                             <View style={styles.picker}>
                                <Picker
                                selectedValue={selectedRoom}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedRoom(itemValue)
                                }>
                                    <Picker.Item label="Room Number" value="select" />
                                    {rooms.map(element => {
                                        return <Picker.Item key={element.uuid_room} label={element.room_name} value={element.uuid_room} color="black" />
                                    })}
                                </Picker> 
                            </View>
                        }
                        
                        <Text style={styles.text3}>
                            Date
                        </Text>
                        {Platform.OS == 'android' && 
                            <TouchableOpacity
                                style={styles.datePicker}
                                onPress={showDatepicker}
                            >
                                <Text style={styles.pickerText}>{date.toLocaleDateString()}</Text>
                            </TouchableOpacity>
                        }
                        {show && Platform.OS == 'android' && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            display="default"
                            onChange={onChange}
                            />
                        )}
                        {Platform.OS == 'ios' && 
                            <TouchableOpacity
                                style={styles.datePicker}
                                onPress={() => setDateModal(true)}
                            >
                                <Text style={styles.pickerText}>{date.toLocaleDateString()}</Text>
                            </TouchableOpacity>
                        }
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={dateModal}
                        >
                            
                            <View style={styles.modalParent}>
                                <View style={styles.modalContainer}>
                                    <View style={{width: '100%'}}>
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={date}
                                            display='spinner'
                                            onChange={onChange}
                                            themeVariant="light"
                                        />
                                        <TouchableOpacity
                                                style={styles.button}
                                                onPress={() => setDateModal(false)}
                                            >
                                                <Text style={styles.buttontext}> Choose</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        <Text style={styles.text3}>
                        Time
                        </Text>
                        {Platform.OS == 'android' &&
                            <View style={styles.picker}>
                                <Picker
                                selectedValue={selectedTime}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedTime(itemValue)
                                }>
                                    <Picker.Item label="7:00 AM to 8:00 AM" value="7:00 AM to 8:00 AM"/>
                                    <Picker.Item label="8:00 AM to 9:00 AM" value="8:00 AM to 9:00 AM"/>
                                    <Picker.Item label="9:00 AM to 10:00 AM" value="9:00 AM to 10:00 AM"/>
                                    <Picker.Item label="10:00 AM to 11:00 AM" value="10:00 AM to 11:00 AM"/>
                                    <Picker.Item label="11:00 AM to 12:00 PM" value="11:00 AM to 12:00 PM"/>
                                    <Picker.Item label="12:00 PM to 1:00 PM" value="12:00 PM to 1:00 PM"/>
                                    <Picker.Item label="1:00 PM to 2:00 PM" value="1:00 PM to 2:00 PM"/>
                                    <Picker.Item label="2:00 PM to 3:00 PM" value="2:00 PM to 3:00 PM"/>
                                    <Picker.Item label="3:00 PM to 4:00 PM" value="3:00 PM to 4:00 PM"/>
                                    <Picker.Item label="4:00 PM to 5:00 PM" value="4:00 PM to 5:00 PM"/>
                                    <Picker.Item label="5:00 PM to 6:00 PM" value="5:00 PM to 6:00 PM"/>
                                    <Picker.Item label="6:00 PM to 7:00 PM" value="6:00 PM to 7:00 PM"/>
                                </Picker> 
                            </View>
                        }
                        { Platform.OS == 'ios'&& 
                            <View style={styles.picker}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setTimeModal(true)
                                    }}
                                >
                                    <Text style={styles.textinput2} >{selectedTime}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={timeModal}
                        >
                            
                            <View style={styles.modalParent}>
                                <View style={styles.modalContainer}>
                                    <View style={{width: '100%'}}>
                                        {time.map(element => {
                                                return <TouchableOpacity
                                                            style={styles.pickerItem}
                                                            key={element.value}
                                                            onPress={() => {
                                                                setSelectedTime(element.value)
                                                                setTimeModal(false)
                                                            }}
                                                        >
                                                            <Text style={styles.text3}>{element.value}</Text>
                                                        </TouchableOpacity>
                                        })}
                                    </View>
                                    <View style={[styles.buttonstyle, {width: '100%', borderTopWidth: 1, borderColor: '#ACACAC'}]}>
                                            <TouchableOpacity
                                                style={styles.button}
                                                onPress={() => {
                                                    setTimeModal(false)
                                                }}
                                            >
                                                <Text style={styles.buttontext}>Go Back</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View>
                        </Modal>
                        <View style={styles.buttonstyle}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={handleSubmit}
                                    >
                                    <Text style={styles.buttontext}>Send Invitation</Text>
                                </TouchableOpacity>
                        </View>
                    </View>   
                </View>
            )}
            </Formik> 
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
        height: '65%',
        padding: 25,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
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
        marginBottom: 10,
        alignSelf: 'center'

    },
    text3 : {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 16,
        marginBottom: 0
        
    },

    text4: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 18,
        marginBottom: 0,
        marginTop: 18
        
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
      marginBottom: 10
    },

    picker:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding: 0,
        width: '100%',
        marginVertical: 5,
        height: 42
    },
    button: {
        backgroundColor: '#FE4D71',
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
    textinput2:{
        padding:8,
        width: '100%',
        marginVertical: 5,
        height: 42,
    },
    modalParent: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    },
    modalContainer: {
        width: '80%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
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

    text4: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 16,
        alignItems: 'center',
        
    },

    button2: {
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