import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Background from '../../assets/images/survey-bg1.svg'
import LogoImg from '../../assets/images/wl-logo2.png'
import RadioButton from '../../components/RadioButton';
import { useDispatch, useSelector } from 'react-redux';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

export default function SignUpSurveyIntro({navigation}) {

    const src = useSelector(state => state.signUp.src)
    const firstName = useSelector(state => state.signUp.firstName)
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        console.log(src)
        return (
            <View style={styles.container}>
                 <View style={styles.half}>
                    <Background
                        style={styles.background}
                        resizeMode="cover" 
                    />
                </View>
                <View style={styles.header}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.text}>
                            Hi
                        </Text>
                        <Text style={styles.text3}>
                            {firstName}!
                        </Text>
                    </View>
                    {src &&
                        <Image
                            style={styles.image}
                            source={{
                                uri: src
                            }}
                        />
                    }
                    {!src  &&
                        <FontAwesomeIcon icon={faUserCircle} size={100} color={'#EF4765'}/>
                    }
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>
                            Let's link
                    </Text>
                    <Text style={styles.text2}>
                            and LEARN now!
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('SignUpSurvey')}
                    >
                        <Text style={styles.buttontext}> Start</Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
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
        backgroundColor: 'white',
        paddingTop: 100
    },
    imageUpload : {
        height: '20%',
        width: '100%',
        backgroundColor: '#ACACAC',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textinput1:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding:8,
        width: '100%',
        marginTop: 15,
    },
    text: {
        marginTop: 15,
        fontFamily: 'Poppins_400Regular',
        color: '#5E5E5E',
        fontSize: 15
    },
    text2 : {
        color: 'white',
        fontFamily: 'Poppins_500Medium',
        fontSize: 23,
        margin: 1
    },
    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 428/653,
        position: 'absolute',
        bottom: 0
        
    },
    half: {
        width: '100%',
        height: '85%',
        position: 'absolute',
        zIndex: 0,
        elevation: 0,
        bottom: 0
    },
    splash: {
        width: 70,
        height: undefined,
        aspectRatio: 1,
        marginTop: 0,
        marginBottom: 0
    },
    header: { 
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: '35%'
    },

    button: {
        backgroundColor: 'white',
        width: '100%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    buttontext: {
        color: '#EF4765',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },
    text3: {
        fontFamily: 'Poppins_400Regular',
        color: '#505062',
        fontSize: 30
        
    },
    headerContainer: {
        marginBottom: 15
    },
    textContainer: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    image : {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 10
    }

})