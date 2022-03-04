import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, TextInput  } from 'react-native';
import Background from '../../assets/images/find-bg.svg'
import Room from '../../assets/images/room.png'
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import sessionService from '../../services/session.service';
import roomService from '../../services/room.service';
import { useSelector } from 'react-redux';
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

  export default function UserCreateSession({navigation}) {

    const [selectedRoom, setSelectedRoom] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [isLoading, setLoading] = useState(true);
    const [rooms, setRooms] = useState(null)
    const uuid_user = useSelector(state => state.user.uuid_user)

    useEffect(() => {
       roomService.getRooms()
       .then(response => {
           setRooms(response.data)
           setLoading(false)
       })
    }, [])

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
    };

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
        sessionService.createSession(values.session_name, Moment(date).format("MMM Do"), selectedTime, uuid_user, selectedRoom)
        .then(response => {
            navigation.navigate('UserChooseSession')
        }).catch(error => {
            console.log(error)
        })
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
            >
            {({ handleChange, handleBlur, handleSubmit, values }) =>( 
                <View style={styles.container}>
                    <View style={styles.half}>
                    <Background
                        style={styles.background}
                        resizeMode="cover" 
                    />
                    
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.text1}>Hello, Student!</Text>
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
                            autoCapitalize="none"
                            onChangeText={handleChange('session_name')}
                            onBlur={handleBlur('session_name')}
                        />
                        <Text style={styles.text3}>
                        Room Number
                        </Text>
                        <View style={styles.picker}>
                            <Picker
                            selectedValue={selectedRoom}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedRoom(itemValue)
                            }>
                                <Picker.Item label="Room Number" value="select" color="#ACACAC" />
                                {rooms.map(element => {
                                    return <Picker.Item key={element.uuid_room} label={element.room_name} value={element.uuid_room} color="black" />
                                })}
                            </Picker> 
                        </View>
                        <Text style={styles.text3}>
                        Date
                        </Text>
                        <TouchableOpacity
                                style={styles.datePicker}
                                onPress={showDatepicker}
                            >
                                <Text style={styles.pickerText}>{date.toLocaleDateString()}</Text>
                            </TouchableOpacity>
                            {show && (
                                <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                display="default"
                                onChange={onChange}
                                />
                            )}
                        <Text style={styles.text3}>
                        Time
                        </Text>
                        <View style={styles.picker}>
                            <Picker
                            selectedValue={selectedTime}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedTime(itemValue)
                            }>
                                <Picker.Item label="Time" value="select" color="#ACACAC" />
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
                        <View style={styles.buttonstyle}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={handleSubmit}
                                    >
                                    <Text style={styles.buttontext}>Submit</Text>
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
        marginBottom: 10
        

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
        height: 42
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
});