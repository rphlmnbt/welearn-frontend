import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, Platform, } from 'react-native';
import Background from '../assets/images/login-mobile-bg.svg'
import AppLoading from 'expo-app-loading';
import { TextInput } from 'react-native-gesture-handler';
import { setInterest } from '../actions/userActions';
import { useDispatch } from 'react-redux';
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
    const[text, setText] = useState('');

    const Interest = () =>  {
        dispatch(setInterest(text))
        navigation.navigate('ImageUpload')
        }
    
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
                <View style={styles.form}>
                        <TextInput
                            placeholder="Set Interests"
                            autoCapitalize="none"
                            style={styles.textinput}
                            onChangeText={(input) => setText(input)}
                        />
                         <TouchableOpacity
                                style={styles.button}
                                onPress={Interest}
                            >
                                <Text style={styles.buttontext}> Continue</Text>
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