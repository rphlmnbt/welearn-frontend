import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Background from '../../assets/images/login-home-bg.svg'
import Splash from '../../assets/images/login-home-splash.svg'
import AppLoading from 'expo-app-loading';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import { proc } from 'react-native-reanimated';
import {API_URL} from '@env'

function LoginHome({ navigation }) {
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
                </View>
                <Splash
                    style={styles.splash}
                    resizeMode="cover" 
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        Welcome To
                    </Text>
                    <Text style={styles.text2}>
                        WeLearn
                    </Text>
                    <Text style={styles.text3}>
                        We Link and You Learn
                    </Text>
                </View>
                <View style={{marginTop: 20}}>
                    <TouchableOpacity
                        style={styles.button1}
                        onPress={() =>navigation.navigate('LoginMobile')}
                    >
                        <Text style={styles.buttonText1}> Continue With Phone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => navigation.navigate('LoginEmail')}
                    >
                        <Text style={styles.buttonText2}> Continue With Email</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.signupText1}>
                        Don't have an account?{' '}
                        <Text style={styles.signupText2} onPress={() => navigation.navigate('SignUpPersonal')}>
                            Sign Up
                        </Text>
                    </Text>
                </View>
                
                
            </View>
        );
    }
}

export default LoginHome

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
        height: '50%',
        position: 'absolute',
        zIndex: 0,
        elevation: 0,
        top: 0
    },
    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 428/562,
        position: 'absolute',
        bottom: 0
    },
    splash: {
        width: 0.85*vw,
        height: undefined,
        aspectRatio: 334/263,
        margin: 0.02*vh
    },
    textContainer: {
        width: 1*vw,
        height: undefined,
        flexDirection: 'column',
        alignItems: 'center'
    },
    text1 : {
        color: '#ACACAC',
        fontFamily: 'Poppins_500Medium',
        fontSize: 18,
        margin: 1
    },
    text2 : {
        color: '#5E5E5E',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 30,
        margin: 1
    },
    text3 : {
        color: '#FF9BAD',
        fontFamily: 'Poppins_500Medium',
        fontSize: 15,
        margin: 1
    },
    button1: {
        flexDirection: 'row',
        backgroundColor: '#EF4765',
        width: 0.75*vw,
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    buttonText1: {
        color: 'white',
        fontFamily: 'Poppins_500Medium',
        letterSpacing: 0.3
    },
    button2: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: 0.75*vw,
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText2: {
        color: '#EF4765',
        fontFamily: 'Poppins_500Medium',
        letterSpacing: 0.3,
    },
    signupText1: {
        marginTop: 15,
        fontFamily: 'Poppins_400Regular',
        color: '#ACACAC',
        fontSize: 14
    },
    signupText2: {
        fontFamily: 'Poppins_500Medium',
        color: '#EF4765'
    }
});