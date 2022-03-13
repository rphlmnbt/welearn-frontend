import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import Background from '../../assets/images/requests-bg.svg'
import invitationService from '../../services/invitation.service';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../components/Loading';
import { useFocusEffect } from '@react-navigation/native';
import {API_URL} from '@env'
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import BottomNav from '../../components/BottomNav';
import { ScrollView } from 'react-native-gesture-handler';
import SessionList from '../../components/SessionList';

export default function UserRequests({navigation}) {
    const IMG_URL = API_URL +'/image/'
    const [isLoading, setLoading] = useState(true);
    const [invitations, setInvitations] = useState(null)
    const uuid_user = useSelector(state => state.user.uuid_user)
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    useFocusEffect(
        React.useCallback(() => {
            invitationService.getInvitations(uuid_user)
            .then(response => {
                console.log(response.data)
                setInvitations(response.data)
                setLoading(false)
            })
         }, [])
    )

     
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
                        <Text style={styles.text2}>Invitations</Text>
                          <ScrollView>
                            {invitations.map(element => {
                                return  <TouchableOpacity key={element.uuid_session} onPress={() => navigation.navigate('UserInvitationDetails', {session: element})}>
                                            <SessionList element={element} />
                                        </TouchableOpacity>
                            })}
                        </ScrollView>    
                       
                    </View>
                </View>
                <BottomNav/>
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
        height: 1*vh - 0.14*vh,
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

  

    image : {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    
    

    

    subinfo:{
        color: '#ACACAC',
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        paddingRight: 25,
        marginBottom: 2
    },

    

    
    

})