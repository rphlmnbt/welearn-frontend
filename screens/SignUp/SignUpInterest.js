import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, Platform, } from 'react-native';
import Background from '../../assets/images/login-mobile-bg.svg'
import AppLoading from 'expo-app-loading';
import { TextInput } from 'react-native-gesture-handler';
import { changeInterest } from '../../actions/signUpActions';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import schema from '../../schemas/signUpInterests.schema'
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
  


export default function SignUpInterest({navigation}) { 
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const dispatch = useDispatch()

    const handleSubmit = (values) =>  {
        console.log(values)
        dispatch(changeInterest(values))
        navigation.navigate('SignUpImageUpload')
        }
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
    return (
        <Formik
        initialValues={{
            interest:''
           }}
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
                <View style={styles.form}>
                        <TextInput
                            placeholder="Set Interests"
                            autoCapitalize="none"
                            style={styles.textinput}
                            onChangeText={handleChange('interest')}
                            onBlur={handleBlur('interest')}
                            value={values.interest}
                        />
                        {errors.interest && touched.interest &&
                            <Text style={{ fontSize: 11, color: '#EF4765', marginTop:5, marginLeft: 5 }}>{errors.interest}</Text>
                            }
                         <TouchableOpacity
                                style={styles.button}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.buttontext}> Continue</Text>
                        </TouchableOpacity>
                </View>
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
        paddingTop: '70%'
    },

    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 428/295,
        position: 'absolute',
        bottom: 0,
        
    },

    half: {
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 0,
        elevation: 0,
        bottom: 0,
        
    },

    button: {
        backgroundColor: '#EF4765',
        width: '50%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
        
    },

    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },

    text : {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 18,
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 5
    },

    textinput:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding:8,
        width: '75%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    form: { 
        justifyContent: 'center',
        alignItems: 'center',
    },

});