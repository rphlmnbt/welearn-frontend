import * as React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput, TouchableOpacity} from 'react-native';
import Background from '../assets/images/login-mobile-bg.svg'
import AppLoading from 'expo-app-loading';
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
                            autoCapitalize="none"
                            keyboardType="numeric"
                        />
                    </View>
                    <View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => navigation.navigate('UserDashboard')}
                            >
                                <Text style={styles.buttontext}> Continue</Text>
                            </TouchableOpacity>
                    </View>
            </View>
            </View>
        );
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
        
    }
});

