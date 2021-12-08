import * as React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements'
import Assets from '../assets/Assets'
function SignIn() {
    return (
        <View style={styles.container}>
            <View style={styles.half}>
                <Image
                    style={styles.background}
                    source={Assets.signinBackground}
                    resizeMode="cover" 
                />
            </View>
            <Image
                style={styles.splash}
                source={Assets.signinSplash}
                resizeMode="stretch" 
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

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export default SignIn

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
        height: 0.35*vh,
        borderRadius: 13,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2, 
        marginBottom: 150,
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
        fontFamily: 'Roboto',
        letterSpacing: 0.3,
        fontWeight: '700'
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
        fontFamily: 'Roboto',
        color: '#5E5E5E',
        fontSize: 15,
        fontWeight: '700'
    },

    text2: {
        marginTop: 15,
        fontWeight: '500',
        color: '#EF4765'
        
    }
});

