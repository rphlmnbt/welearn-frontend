import React from 'react';
import { StyleSheet, View, Text, Dimensions  } from 'react-native';
import Background from '../assets/images/profile-bg.svg'
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import BottomNav from '../components/BottomNav';
import Stats from '../components/Stats';

  export default function UserDashboard({navigation}) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });
    const firstName = useSelector(state => state.user.user.first_name)
    const lastName = useSelector(state => state.user.user.last_name)
    const course = useSelector(state => state.user.user.course)
    const yearLevel = useSelector(state => state.user.user.year_level)
    const interests = useSelector(state => state.user.user.interests)
    const stats = useSelector(state => state.user.user.stats)
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
                <View style={styles.header}>
                    <FontAwesomeIcon icon={faUserCircle} size={100} color={'#EF4765'}/>
                    
                    <View style={styles.infoContainer}>
                        <Text style={styles.text2}>{firstName} {lastName}</Text>
                        <Text style={styles.text3}>{course}</Text>
                        <Text style={styles.text3}>{yearLevel}</Text>
                        <Text style={styles.text3}>{interests}</Text>
                    </View>              
                </View>
                <Stats stats={stats} />
                <BottomNav /> 
            </View>
        );
    }
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EF4765',
        width: '50%',
        height: 40,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        zIndex:5
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },
    container: { 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%' , 
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
        aspectRatio: 428/287,
        position: 'absolute',
        top: '-25%'
    },
    text1 : {
        color: 'white',
        fontFamily: 'Poppins_500Medium',
        fontSize: 18,
        margin: 1,
        marginTop: '15%',
        textAlign: 'center',
        marginBottom: 20
    },
    text2 : {
        marginTop: 5,
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 18,
        
    },
    text3: {
        fontFamily: 'Poppins_400Regular',
        color: '#777777',
        fontSize: 12
        
    },
    text4 : {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 12,
        marginBottom: 2,
        marginTop: 5
    },
    infoContainer: {
        paddingLeft: 10
    },  
    header:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: '45%',
        paddingHorizontal: 30
    },
    menucontainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopColor: '#ACACAC',
        borderTopWidth: 1,
    },
    images: {
        width: 45,
        height: 45,
        margin: 10
    },
    modalContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '40%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
});