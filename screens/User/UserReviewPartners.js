import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Modal, Text } from 'react-native';
import Background from '../../assets/images/find-bg.svg';
import userService from '../../services/user.service';
import {API_URL} from '@env'
import { useSelector } from 'react-redux';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import UserInfo from '../../components/UserInfo';
import Stats from '../../components/Stats';
import Loading from '../../components/Loading';
import invitationService from '../../services/invitation.service';
import mlService from '../../services/ml.service';
import ratingService from '../../services/rating.service';

  export default function UserReviewPartners({route, navigation}) {
    const IMG_URL = API_URL +'/image/'
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
    const [profilePic, setProfilePic] = useState(null)
    const [stats, setStats] = useState(null)
    const [openModal, setOpenModal] = useState(false);
    const { uuid_partner } = route.params;
    const { uuid_session } = route.params;
    const uuid_user = useSelector(state => state.user.uuid_user)

    useEffect(() => {
        userService.findOneUser(uuid_partner)
        .then(response => {
            console.log(response.data)
            setUser(response.data)
            if(response.data.user_detail.src != null) {
                setProfilePic(IMG_URL + response.data.uuid_user)
            } else {
                setProfilePic(null)
            }
            setStats([response.data.survey.q1,response.data.survey.q2,response.data.survey.q3,response.data.survey.q4,response.data.survey.q5,response.data.survey.q6,response.data.survey.q7])
            setLoading(false)
        })
    }, [])

    const rateTrue = () => {
        ratingService.rateUser(uuid_user, uuid_partner, true, uuid_session)
        .then(async response => {
            console.log(response)
            await mlService.addToDataset(uuid_user, stats, true)
            navigation.goBack()
        })
        .catch(error => {
            setOpenModal(true)
            console.log(error)
        })
        
    }

    const rateFalse = () => {
        ratingService.rateUser(uuid_user, uuid_partner, false, uuid_session)
        .then(async response => {
            console.log(response)
            await mlService.addToDataset(uuid_user, stats, false)
            navigation.goBack()
        })
        .catch(error => {
            setOpenModal(true)
            console.log(error)
        })
        
    }

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });
    if (!fontsLoaded || isLoading) {
        return <Loading />
    } else {
        return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.text4}>User has already been rated.</Text>
                    <TouchableOpacity style={styles.button2} onPress={() => setOpenModal(false)}>
                        <Text style={styles.buttontext}>Try Again</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.half}>
               <Background
                   style={styles.background}
                   resizeMode="cover" 
               />
            </View>
            <View style={styles.userdetails}>
                <View style={{marginTop: '5%'}}>
                    <UserInfo profilePic={profilePic} firstName={user.user_detail.first_name} lastName={user.user_detail.last_name} course={user.user_detail.course} yearLevel={user.user_detail.year_level} interest={user.user_detail.interest} isActive={user.isActive} />
                </View>
                
                <Stats stats={stats} />
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={rateTrue}>
                            <Image
                            style={styles.images}
                            source={require('../../assets/images/check-button.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={rateFalse}>
                            <Image
                            style={styles.images}
                            source={require('../../assets/images/remove.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        );
    }
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    container: { 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%' 
    },
    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 428/295,
        position: 'absolute',
        bottom: 0
        
    },
    half: {
        width: '100%',
        height: '80%',
        position: 'absolute',
        zIndex: 0,
        elevation: 0,
        bottom: 0
    },
    userdetails: {
        backgroundColor: 'white',
        width: '100%',
        height: '83%',
        padding: 25,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    text1 : {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 15,
        marginBottom: 2
        
    },

    text2: {
        fontFamily: 'Poppins_400Regular',
        color: '#BBBBBB',
        fontSize: 12,
        marginBottom: 2
        
    },
    text3: {
        fontFamily: 'Poppins_500Medium',
        color: '#EF4765',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 2
    },
    text4 : {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 12,
        marginBottom: 8,
        marginTop: 8
        
    },
    header:{
      alignItems: 'center',
      marginTop: '30%'

    },
    images: {
      width: 90,
      height: 90,
      margin: 30,
      marginTop: 30
    },

    user: {
        alignItems: 'center',
        marginBottom: 20,
    },
    menucontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '55%',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    column: {
      flexDirection: 'column',
      width: '35%',
    },

    modalContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: '40%',
        margin: 20,
        backgroundColor: "#F2F2F2",
        borderRadius: 5,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    text4: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 16,
        alignItems: 'center',
        
    },

    button2: {
        backgroundColor: '#EF4765',
        width: '50%',
        height: 35,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10
    },
});