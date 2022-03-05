import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Background from '../../assets/images/requests-bg.svg'
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import BottomNav from '../../components/BottomNav';
import sessionService from '../../services/session.service';
import Loading from '../../components/Loading';

export default function UserAllReservations({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [sessions, setSessions] = useState(null)
    const uuid_user = useSelector(state => state.user.uuid_user)
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    useEffect(() => {
        sessionService.getAllSessions()
        .then(response => {
            console.log(response.data)
            setSessions(response.data)
            setLoading(false)
        })
     }, [])

     if (!fontsLoaded || isLoading) {
        return <Loading />
    } else {
        return (
            <View style={styles.container}>
                 <View style={styles.half}>
                    <Background
                        style={styles.background}
                        resizeMode="cover" 
                    />
                    <View style={styles.usercontainer}>             
                        <Text style={styles.text2}>Study Room Reservations</Text>
                        {sessions.map(element => {
                            return  <TouchableOpacity key={element.uuid_session}>
                                        <View style={styles.userdetails}>
                                        <Image
                                            style={styles.images}
                                            source={require('../../assets/images/room.png')} 
                                        />
                                        <View style={styles.textsection}>
                                            <View style={styles.usertext}>
                                                <Text style={styles.name}>{element.session_name}</Text>
                                                <Text style={styles.Timerequest}>{element.time}</Text>
                                            </View>
                                            <View style={styles.usertext}>
                                                <Text style={styles.userinfo}>{element.room.room_name}</Text>
                                                <Text style={styles.Timerequest}>{element.date}</Text>
                                            </View>
                                            
                                        </View>
                                        </View>
                                    </TouchableOpacity>
                        })}
                        
                    </View>
                </View>
                <BottomNav />
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

    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 428/295,
        position: 'absolute',
        bottom: 0,
        opacity: 0.4,
        
    },
    half: {
        width: '100%',
        height: '115%',
        position: 'relative',
        zIndex: 0,
        elevation: 0,
        bottom: 0,
        
    },

    text1 : {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        textAlign: 'center',
        color: '#ACACAC',  
    },
    
    text2 : {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        color: '#5E5E5E',
        alignSelf: 'flex-start' 
    },

    usercontainer:{
        alignItems: 'center',
        padding: 20
    },

    userdetails:{
        width: '100%',
        height: 100,
        flexDirection: 'row',   
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15,
    },

    images:{
        width: 60,
        height: 60,

    },

    textsection:{
        flexDirection: 'column',   
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
    },

    usertext:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    name:{
        fontSize: 14,
        fontFamily: 'Poppins_600SemiBold',
    },

    Timerequest:{
        color: '#ACACAC',
        fontSize: 13,
        fontFamily: 'Poppins_400Regular',
        paddingRight: 25,
    },

    userinfo:{
        fontSize: 13,
        color: '#ACACAC',
        
    }
    

})