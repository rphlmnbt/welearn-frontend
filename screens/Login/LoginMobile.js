import React, {useState} from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput, TouchableOpacity, Modal} from 'react-native';
import Background from '../../assets/images/login-mobile-bg.svg'
import AppLoading from 'expo-app-loading';
import { Formik } from 'formik';
import { logIn } from '../../actions/userActions';
import authService from '../../services/auth.service';
import { useDispatch } from 'react-redux';

import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

function LoginMobile({ navigation }) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (values) => {
        authService.signInMobile(values.contact_number)
        .then(response => {
            if(response.status == 200){
                console.log(response.data.user)
                dispatch(logIn(response.data.user))
                navigation.navigate('UserDashboard')
                
            }
            
        })
        .catch(error => {
            console.log(error)
            setOpenModal(true)
        })
        
  }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Formik
            initialValues={{
                contact_number:'',
                }}
            onSubmit={handleSubmit}
         >
            {({ handleChange, handleBlur, handleSubmit, values }) =>( 
            <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.text3}>Invalid Credentials. Please try again.</Text>
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
                            My mobile
                        </Text>
                        <Text style={styles.text2}>
                            Please enter your valid phone number. We will send you a 4-digit code to verify your account.
                        </Text>
                        <TextInput
                            placeholder="Mobile Number"
                            autoCapitalize="none"
                            style={styles.mobileInput}
                            keyboardType="numeric"
                            onChangeText={handleChange('contact_number')}
                            onBlur={handleBlur('contact_number')}
                        />
                    </View>
                    <View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.buttontext}> Continue</Text>
                            </TouchableOpacity>
                    </View>
            </View>
            </View>
        )
    }
    </Formik> 
        )   
    } 
}

export default LoginMobile

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
        alignItems: 'center'
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },
    mobileInput:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding:8,
        width: '100%',
        marginVertical: 40
    },

    text: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#393946',
        fontSize: 34
    },

    text2: {
        fontFamily: 'Poppins_400Regular',
        color: '#505062',
        fontSize: 12   
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

    text3: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 16,
        alignItems: 'center',
        
    },

    button2: {
        backgroundColor: '#EF4765',
        width: '40%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 40
    },
});

