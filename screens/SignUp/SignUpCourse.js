import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Background from '../../assets/images/login-mobile-bg.svg'
import LogoImg from '../../assets/images/wl-logo2.png'
import RadioButton from '../../components/RadioButton';
import { Formik } from 'formik';
import {Picker} from '@react-native-picker/picker';
import{
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import { useDispatch } from 'react-redux';
import {changeCourse} from '../../actions/signUpActions'

export default function SignUpCourse({navigation}) {

    const [selectedYear, setSelectedYear] = useState();

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const dispatch = useDispatch()

    const handleSubmit = values => {
        console.log(values)
        dispatch(changeCourse(values))
        navigation.navigate('SignUpInterests')
        
    }


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Formik
                initialValues={{
                    course:'',
                    yearLevel:''
                }}
                onSubmit={handleSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit,values }) => (
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
                                placeholder="Course Program"
                                autoCapitalize="none"
                                style={styles.textinput1}
                                autoCapitalize="none"
                                onChangeText={handleChange('course')}
                                onBlur={handleBlur('course')}
                                value={values.course}
                            />
                            <View style={styles.picker}>
                            <Picker
                            selectedValue={values.yearLevel}
                            onValueChange={handleChange('yearLevel')}>
                            <Picker.Item label="Year Level" value="select" color="#ACACAC" />
                            <Picker.Item label="First Year" value="1st Year"/>
                            <Picker.Item label="Second Year" value="2nd Year"/>
                            <Picker.Item label="Third Year" value="3rd Year"/>
                            <Picker.Item label="Fourth Year" value="4th Year"/>
                            </Picker> 
                            </View>
                            
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
    },

    picker:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding: 0,
        width: '100%',
        marginTop: 15,
        height: 48
    }
})