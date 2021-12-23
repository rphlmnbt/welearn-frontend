import * as React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity,} from 'react-native';
import { KeycodeInput } from 'react-native-keycode'
import { useState }  from 'react';
import Background from '../assets/images/login-mobile-bg.svg'
import AppLoading from 'expo-app-loading';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'


function LoginMobilePin({navigation}) {
    const [value, setValue] = useState('');
    const [numeric, setNumeric] = useState(true);
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
                            Please enter the 4 digit OTP
                        </Text>
                        <Text style={styles.text2}>
                            sent to your mobile number.
                        </Text>
                    </View>
                    <View>
                    <KeycodeInput style={styles.inputcode}
                        numeric={numeric}
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        onComplete={(completedValue) => {
                        alert('Completed! Value: ' + completedValue);
                        }}
                        tintColor='#EF4765'
                    />
                    </View>
                    <View>
                    <Text style={styles.text3}>
                            Don't tell anyone the code
                        </Text>

                        <Text style={styles.text4}>
                            Code expires in 5 minutes.
                        </Text>
                        <Text style={styles.text5}>
                            RESEND OTP
                        </Text>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => navigation.navigate('LoginDashboardProfile')}
                            >
                                <Text style={styles.buttontext}>Accept</Text>
                            </TouchableOpacity>
                    </View>
            </View>
            </View>
        );
    }
}

export default LoginMobilePin

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
        alignItems: 'center',
        marginTop: 25
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },

    text: {
        fontFamily: 'Poppins_400Regular',
        color: '#5E5E5E',
        fontSize: 14,
        textAlign: 'center',
        margin: 0,

    },

    text2: {
        fontFamily: 'Poppins_400Regular',
        color: '#5E5E5E',
        fontSize: 14,
        textAlign: 'center',
        margin: 0,
        
    },
    
    text3: {
        fontFamily: 'Poppins_400Regular',
        color: '#5E5E5E',
        fontSize: 12,
        textAlign: 'center',
        margin: 0,
        marginTop: 35
        
    },

    text4: {
        fontFamily: 'Poppins_400Regular',
        color: '#5E5E5E',
        fontSize: 12,
        textAlign: 'center',
        margin: 0,
        
    },

    text5: {
        fontFamily: 'Poppins_400Regular',
        color: '#FF9BAD',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 15,
        
    },

    inputcode:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    }

});

