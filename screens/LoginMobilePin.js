import * as React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput, TouchableOpacity} from 'react-native';
import Assets from '../assets/Assets'

function LoginMobilePin() {
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
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={styles.buttontext}> Continue</Text>
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
        alignItems: 'center'
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Roboto',
        letterSpacing: 0.3,
        fontWeight: '700'
    },

    text: {
        fontFamily: 'Roboto',
        color: '#393946',
        fontSize: 34,
        fontWeight: '800'
    },

    text2: {
        color: '#505062',
        fontSize: 12
        
    }
});

