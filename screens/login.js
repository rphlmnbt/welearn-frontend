import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import Assets from '../assets/Assets'

function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.half}>
                <Image
                    style={styles.background}
                    source={Assets.loginBackground}
                    resizeMode="cover" 
                />
            </View>
            <Image
                style={styles.splash}
                source={Assets.loginSplash}
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
                >
                    <FontAwesomeIcon icon={faMobileAlt} size='20' color='white'/>
                    <Text style={styles.buttonText1}> Continue With Phone</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                >
                    <FontAwesomeIcon icon={faEnvelope} size='20' color='#EF4765'/>
                    <Text style={styles.buttonText2}> Continue With Email</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.signupText1}>
                    Don't have an account?{' '}
                    <Text style={styles.signupText2}>
                        Sign Up
                    </Text>
                </Text>
            </View>
            
            
        </View>
    );
}

export default Login

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
        aspectRatio: 428/562,
        position: 'absolute',
        bottom: 0
    },
    splash: {
        width: '85vw',
        aspectRatio: 334/263,
        margin: '2vh'
    },
    textContainer: {
        width: '100vw',
        flexDirection: 'column',
        alignItems: 'center'
    },
    text1 : {
        color: '#ACACAC',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '500',
        margin: '3px',
        marginTop: 10
    },
    text2 : {
        color: '#5E5E5E',
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: '800',
        margin: '3px'
    },
    text3 : {
        color: '#FF9BAD',
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '500',
        margin: '3px'
    },
    button1: {
        flexDirection: 'row',
        backgroundColor: '#EF4765',
        width: '75vw',
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
        fontFamily: 'Roboto',
        letterSpacing: 0.3,
        fontWeight: '500'
    },
    button2: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '75vw',
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
        fontFamily: 'Roboto',
        letterSpacing: 0.3,
        fontWeight: '500'
    },
    signupText1: {
        marginTop: 15,
        fontFamily: 'Roboto',
        color: '#ACACAC',
        fontSize: 12
    },
    signupText2: {
        fontWeight: 500,
        color: '#EF4765'
    }
});