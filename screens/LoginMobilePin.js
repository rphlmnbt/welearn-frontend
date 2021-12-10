import * as React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity,} from 'react-native';
import Assets from '../assets/Assets'
import { KeycodeInput } from 'react-native-keycode'
import { useState }  from 'react';

function LoginMobilePin() {
    const [value, setValue] = useState('');
    const [numeric, setNumeric] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.half}>
                <Image
                    style={styles.background}
                    source={Assets.mobileLoginBackground}
                    resizeMode="cover" 
                />
            </View>
            <View style={styles.form}>
                <View>
                    <Text style={styles.text}>
                        Please enter the 4 digit OTP
                    </Text>
                    <Text style={styles.text2}>
                        sent to
                    </Text>
                </View>
                <View>
                <KeycodeInput style={styles.inputcode}>
                numeric={numeric}
                value={value}
                onChange={(newValue) => setValue(newValue)}
                onComplete={(completedValue) => {
                alert('Completed! Value: ' + completedValue);
                }}
                </KeycodeInput>
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
                        >
                            <Text style={styles.buttontext}>Accept</Text>
                        </TouchableOpacity>
                </View>
           </View>
        </View>
    );
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
        fontFamily: 'Roboto',
        letterSpacing: 0.3,
        fontWeight: '700'
    },

    text: {
        fontFamily: 'Roboto',
        color: '#5E5E5E',
        fontSize: 14,
        textAlign: 'center',
        margin: 3,

    },

    text2: {
        fontFamily: 'Roboto',
        color: '#5E5E5E',
        fontSize: 14,
        textAlign: 'center',
        margin: 3,
        
    },
    
    text3: {
        fontFamily: 'Roboto',
        color: '#5E5E5E',
        fontSize: 12,
        textAlign: 'center',
        margin: 3,
        marginTop: 35
        
    },

    text4: {
        fontFamily: 'Roboto',
        color: '#5E5E5E',
        fontSize: 12,
        textAlign: 'center',
        margin: 5,
        
    },

    text5: {
        fontFamily: 'Roboto',
        color: '#FF9BAD',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
        
    },

    inputcode:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }

});

