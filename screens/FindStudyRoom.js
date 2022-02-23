import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image,  } from 'react-native';
import Background from '../assets/images/find-bg.svg'
import AppLoading from 'expo-app-loading';
import Room from '../assets/images/room.png'
import {Picker} from '@react-native-picker/picker';
import {useState} from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

  export default function FindStudyRoom({navigation}) {

    const [selectedRoom, setSelectedRoom] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

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


    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
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
               <Text style={styles.text1}>Hello, Student!</Text>
               <Text style={styles.text2}>Pick your discussion Room</Text>
            </View>
            <Image
                source={Room}
                style={styles.images}
            />
            <View style={styles.userdetails}>
                <Text style={styles.text3}>
                   Study Room Number
                </Text>
                <View style={styles.picker}>
                    <Picker
                    selectedValue={selectedRoom}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedRoom(itemValue)
                    }>
                    <Picker.Item label="Room Number" value="select" color="#ACACAC" />
                    <Picker.Item label="1" value="first"/>
                    <Picker.Item label="2" value="second"/>
                    <Picker.Item label="3" value="third"/>
                    <Picker.Item label="4" value="fourth"/>
                    </Picker> 
                </View>
                <Text style={styles.text4}>
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
                <Text style={styles.text4}>
                   Time
                </Text>
                <View style={styles.picker}>
                    <Picker
                    selectedValue={selectedTime}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedTime(itemValue)
                    }>
                    <Picker.Item label="Time" value="select" color="#ACACAC" />
                    <Picker.Item label="7:00 AM to 8:00 AM" value="Time-1"/>
                    <Picker.Item label="8:00 AM to 9:00 AM" value="Time-2"/>
                    <Picker.Item label="9:00 AM to 10:00 AM" value="Time-3"/>
                    <Picker.Item label="10:00 AM to 11:00 AM" value="Time-4"/>
                    <Picker.Item label="11:00 AM to 12:00 PM" value="Time-5"/>
                    <Picker.Item label="12:00 PM to 1:00 PM" value="Time-6"/>
                    <Picker.Item label="1:00 PM to 2:00 PM" value="Time-7"/>
                    <Picker.Item label="2:00 PM to 3:00 PM" value="Time-8"/>
                    <Picker.Item label="3:00 PM to 4:00 PM" value="Time-9"/>
                    <Picker.Item label="4:00 PM to 5:00 PM" value="Time-10"/>
                    <Picker.Item label="5:00 PM to 6:00 PM" value="Time-11"/>
                    </Picker> 
                </View>
                <View style={styles.buttonstyle}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('UserDashboard')}
                            >
                            <Text style={styles.buttontext}>Submit</Text>
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
        height: '60%',
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
        marginLeft: 30,
        marginBottom: 5,
        marginTop: '-27%'
        
    },

    text2 : {
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        marginLeft: 30,
        fontSize: 16
        

    },
    text3 : {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 18,
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
      alignItems: 'center',
      marginTop: '30%'

    },
    images: {
      width: '41%',
      marginTop: '35%',
      borderRadius: 30,
      borderWidth: 1,
      height: '20%'
    },

    picker:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding: 0,
        width: '100%',
        marginTop: 15,
        height: 48
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
        height: 45,
        marginTop: 15,
        justifyContent: 'center',
        padding:8,
    },
    pickerText: {
        color: '#ACACAC',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },
});