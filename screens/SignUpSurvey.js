import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CardBG from '../assets/images/card-bg1.png'
import CardBGWh from '../assets/images/card-bg2.png'
import LogoImg from '../assets/images/wl-logo2.png'
import RadioButton from '../components/RadioButton';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

export default function SignUpSurvey({navigation}) {

    const [value, setValue] = useState(1)
   
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const data = [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 }
    ];

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.splash}
                    source={LogoImg}
                    resizeMode="contain" 
                />
                <Text style={styles.logoText}>
                        WeLearn
                </Text>
                <ImageBackground
                    source={CardBG}
                    style={styles.background}
                    resizeMode="contain" 
                >
                        <Text style={styles.text}>
                            Rate Yourself
                        </Text>
                        <Text style={styles.questText}>
                            Question Here
                        </Text>
                        <ImageBackground
                            source={CardBGWh}
                            style={styles.background2}
                            resizeMode="cover" 
                        >
                            <View style={{marginTop: 10, marginBottom: 20}}>                     
                                <Text style={styles.insText}>
                                    Please rate the following statements from
                                </Text>
                                <Text style={styles.insText}>
                                    1 (Strongly Disagree) to 4 (Strongly Agree)
                                </Text>
                            </View>
                            <View style={{width:'80%'}}>
                                <RadioButton data={data} />
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => navigation.navigate('LoginHome')}
                            >
                                <Text style={styles.buttontext}> Continue</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                </ImageBackground>
                
                
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
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        fontSize: 35,
        marginHorizontal: 20
    },
    logoText : {
        color: '#5E5E5E',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        margin: 1,
        marginBottom: 20
    },
    questText: {
        marginTop: 15,
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: '10%'
    },
    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 1712/1516
        
    },
    background2: {
        width: '100%',
        height: undefined,
        aspectRatio: 1712/1344,
        alignItems: 'center'
        
    },
    splash: {
        width: 70,
        height: undefined,
        aspectRatio: 1,
        marginTop: 0,
        marginBottom: 0,
    },
    form: { 
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    button: {
        backgroundColor: '#EF4765',
        width: '80%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 38
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },
    insText: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#757575',
        fontSize: 12,
        
    },
    formHeader: {
        alignItems: 'center',
        marginBottom: 15
    },

})