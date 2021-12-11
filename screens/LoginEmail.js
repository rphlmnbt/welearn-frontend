import * as React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements'
import Background from '../assets/images/login-email-bg.svg'
import LoginLogoImg from '../assets/images/wl-logo.png'
import AppLoading from 'expo-app-loading';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

function LoginEmail() {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_600SemiBold
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
                <Image
                    style={styles.splash}
                    source={LoginLogoImg}
                    resizeMode="contain" 
                />
                <Card containerStyle={styles.card}>
                    <View>
                        <Text style={styles.text}>
                            Email
                        </Text>
                        <TextInput
                            placeholder="Email"
                            autoCapitalize="none"
                            style={styles.textinput1}
                            autoCapitalize="none"
                        />
                        <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
                            <Text style={styles.text}>
                                Password
                            </Text>
                            <Text style={styles.text2}>
                                    Forgot Password?    
                            </Text>
                        </View>           
                        <TextInput 
                            placeholder="Password"
                            secureTextEntry={true} 
                            style={styles.textinput2}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{marginTop: 20}}>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                <Text style={styles.buttontext}> Continue</Text>
                            </TouchableOpacity>
                    </View>
            </Card>
            </View>
        );
    }
}

export default LoginEmail

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
        top: 0
    },
    background: {
        width: '100%',
        aspectRatio: 329/562,
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
    card: {
        width: '80%',
        borderRadius: 13,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2, 
        flexDirection: 'column',
        justifyContent: 'center'
    },

    textContainer: {
        width: 1*vw,
        height: undefined,
        flexDirection: 'column',
        alignItems: 'center'
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
        marginBottom: 10,
        marginTop: 10
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },
    textinput1:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding:8,
        width: '100%',
        marginTop: 5
    },

    textinput2:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding:8,
        width: '100%',
        marginTop: 5
    },

    text: {
        marginTop: 15,
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 15
    },

    text2: {
        marginTop: 15,
        fontFamily: 'Poppins_500Medium',
        color: '#EF4765'
        
    }
});

