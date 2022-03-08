import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import Background from '../../assets/images/login-mobile-bg.svg'
import LogoImg from '../../assets/images/wl-logo2.png'
import { Formik } from 'formik';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import { changeContact } from '../../actions/signUpActions'
import { useDispatch } from 'react-redux';
import schema from '../../schemas/signUpContact.schema'

export default function SignUpContact({navigation}) {
   
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const dispatch = useDispatch()

    const handleSubmit = values => {
        console.log(values)
        dispatch(changeContact(values))
        navigation.navigate('LoginMobilePin')
        
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Formik
                initialValues={{
                    contactNumber: ''}}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {({ handleChange, handleBlur, handleSubmit,values, errors, touched }) => (
                     <View style={styles.container}>
                     <View style={styles.half}>
                        <Background
                            style={styles.background}
                            resizeMode="cover" 
                        />
                    </View>
                    <Image
                        style={styles.splash}
                        source={LogoImg}
                        resizeMode="contain" 
                    />
                    <Text style={styles.text2}>
                            WeLearn
                    </Text>
                    <View style={styles.form}>
                        <View style={styles.formHeader}>
                            <Text style={styles.text}>
                                Create a WeLearn Account
                            </Text>
                            <Text style={styles.text3}>
                                Please provide the following information.
                            </Text>
                        </View>
                        <TextInput
                                placeholder="Mobile Number"
                                autoCapitalize="none"
                                style={styles.mobileInput}
                                keyboardType="numeric"
                                onChangeText={handleChange('contactNumber')}
                                onBlur={handleBlur('contactNumber')}
                                value={values.contactNumber}
                        />
                        {errors.contactNumber && touched.contactNumber &&
                            <Text style={{ fontSize: 11, color: '#EF4765', marginTop:5, marginLeft: 5 }}>{errors.contactNumber}</Text>
                        }
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttontext}> Continue</Text>
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
                    
                )}
            </Formik> 
           
        )
    }
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container : {
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingTop: 100
    },
    imageUpload : {
        height: '20%',
        width: '100%',
        backgroundColor: '#ACACAC',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textinput1:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding:8,
        width: '100%',
        marginTop: 15,
    },
    text: {
        marginTop: 15,
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 15
    },
    text2 : {
        color: '#5E5E5E',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        margin: 1
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
    splash: {
        width: 70,
        height: undefined,
        aspectRatio: 1,
        marginTop: 0,
        marginBottom: 0
    },
    form: { 
        width: '80%',
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
        marginTop: 20
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },
    text3: {
        fontFamily: 'Poppins_400Regular',
        color: '#505062',
        fontSize: 12
        
    },
    formHeader: {
        alignItems: 'center',
        marginBottom: 15
    },

    mobileInput:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding:8,
        width: '100%',
        marginVertical: 30
    },

})