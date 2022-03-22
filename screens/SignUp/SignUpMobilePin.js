import * as React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity, Modal} from 'react-native';
import { KeycodeInput } from 'react-native-keycode'
import { useState }  from 'react';
import Background from '../../assets/images/login-mobile-bg.svg'
import AppLoading from 'expo-app-loading';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { getApp, initializeApp } from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithCredential, signInWithPhoneNumber } from 'firebase/auth';
import { useSelector } from 'react-redux';

import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'


const firebaseConfig = {
    apiKey: "AIzaSyD4Uw8LLmGcNUq8EbkGEe5Jtxk3FBf5K90",
    authDomain: "welearn-b047d.firebaseapp.com",
    databaseURL: "https://welearn-b047d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "welearn-b047d",
    storageBucket: "welearn-b047d.appspot.com",
    messagingSenderId: "564588548490",
    appId: "1:564588548490:web:c5f82ce4b11b9808deb873",
    measurementId: "G-WMJZ063K7B"
};
  
initializeApp(firebaseConfig)

// Firebase references
const app = getApp();
const auth = getAuth();


export default function SignUpMobilePin({navigation}) {
    const [value, setValue] = useState('');
    const [numeric, setNumeric] = useState(true);

    const [openModal, setOpenModal] = useState(false);

    const verificationId = useSelector(state => state.signUp.verificationId)

    const handleSubmit = async () => {
        console.log(verificationId)
        try {
          const credential = PhoneAuthProvider.credential(
            verificationId,
            value
          );
          await signInWithCredential(auth, credential);
          navigation.navigate('SignUpSchool')
        } catch (err) {
            setOpenModal(true)
        }
    }
    
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
                <Modal
                     animationType="slide"
                     transparent={true}
                     visible={openModal}
                 >
                     <View style={styles.modalContainer}>
                         <Text style={styles.text4}>Invalid OTP. Please try again</Text>
                         <TouchableOpacity style={styles.button2} onPress={() => setOpenModal(false)}>
                             <Text style={styles.buttontext}>OK</Text>
                         </TouchableOpacity>
                     </View>
                </Modal>
                <View style={styles.half}>
                    <Background
                        style={styles.background}
                        resizeMode="cover" 
                    />
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.text}>
                            Please enter the 6 digit OTP
                        </Text>
                        <Text style={styles.text2}>
                            sent to your mobile number.
                        </Text>
                    </View>
                    <View>
                    <KeycodeInput style={styles.inputcode}
                        length={6}
                        numeric={numeric}
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        // onComplete={(completedValue) => {
                        // alert('Completed! Value: ' + completedValue);
                        // }}
                        tintColor='#EF4765'
                    />
                    </View>
                    <View>
                    <Text style={styles.text3}>
                            Don't tell anyone the code
                        </Text>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.buttontext}>Accept</Text>
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
        justifyContent: 'center',
        width: '100%',
        height: '100%' 
    },
    half: {
        width: '100%',
        height: '80%',
        position: 'absolute',
        zIndex: 0,
        elevation: 0,
        bottom: 0
    },
    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 428/295,
        position: 'absolute',
        bottom: 0
        
    },
    splash: {
        width: 0.6*vw,
        height: undefined,
        aspectRatio: 340/263,
        marginTop: 0,
        marginBottom: 0
    },
    form: { 
        width: '70%',
        height: 0.35*vh,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    button: {
        backgroundColor: '#EF4765',
        width: '100%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },

    text: {
        fontFamily: 'Poppins_400Regular',
        color: '#5E5E5E',
        fontSize: 14,
        textAlign: 'center',
        margin: 0,

    },

    text2: {
        fontFamily: 'Poppins_400Regular',
        color: '#5E5E5E',
        fontSize: 14,
        textAlign: 'center',
        margin: 0,
        
    },
    
    text3: {
        fontFamily: 'Poppins_400Regular',
        color: '#5E5E5E',
        fontSize: 12,
        textAlign: 'center',
        margin: 0,
        marginTop: 35
        
    },

    text4: {
        fontFamily: 'Poppins_400Regular',
        color: '#5E5E5E',
        fontSize: 12,
        textAlign: 'center',
        margin: 0,
        
    },

    text5: {
        fontFamily: 'Poppins_400Regular',
        color: '#FF9BAD',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 15,
        
    },

    inputcode:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },

    modalContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: '53%',
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

