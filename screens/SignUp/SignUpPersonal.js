import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, StatusBar, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Background from '../../assets/images/login-mobile-bg.svg'
import LogoImg from '../../assets/images/wl-logo2.png'
import RadioButton from '../../components/RadioButton';
import Header from '../../components/Header';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
import { changeName } from '../../actions/signUpActions';
import schema from '../../schemas/signUpPersonal.schema'
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

export default function SignUpPersonal({navigation}) {

    const firstName = useSelector(state => state.firstName)
    const lastName = useSelector(state => state.lastName)
   
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const dispatch = useDispatch()

    const handleSubmit = values => {
        console.log(values)
        dispatch(changeName(values))
        navigation.navigate('SignUpBirth')
        
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Formik
                initialValues={{
                    lastName:'',
                    firstName:''}}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {({ handleChange, handleBlur, handleSubmit,values, errors }) => (
                    <KeyboardAvoidingView style={{flex:1}}>
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
                                    placeholder="First Name"
                                    autoCapitalize="none"
                                    style={styles.textinput1}
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                />
                                 {errors.firstName &&
                                <Text style={{ fontSize: 11, color: '#EF4765', marginTop:5, marginLeft: 5 }}>{errors.firstName}</Text>
                                  }
                                <TextInput
                                    placeholder="Last Name"
                                    autoCapitalize="none"
                                    style={styles.textinput1}
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    value={values.lastName}
                                />
                                 {errors.lastName &&
                                <Text style={{ fontSize: 11, color: '#EF4765', marginTop:5, marginLeft: 5 }}>{errors.lastName}</Text>
                                  }
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={handleSubmit}
                                >
                                    <Text style={styles.buttontext}> Continue</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                    
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
        paddingTop: 100,
        flex: 1
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
        marginTop: 30
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
    }
})