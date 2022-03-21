import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Modal, Text  } from 'react-native';
import Background from '../../assets/images/find-bg.svg'
import userService from '../../services/user.service';
import { useSelector, useDispatch } from 'react-redux';
import { setPartner, setReload, setStudyPartners, setSize, setCount } from '../../actions/partnerActions';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import BottomNav from '../../components/BottomNav';
import UserInfo from '../../components/UserInfo';
import Stats from '../../components/Stats';
import Loading from '../../components/Loading';
import mlService from '../../services/ml.service';
import invitationService from '../../services/invitation.service';
  export default function UserFindPartner({navigation, route}) {
    const {session} = route.params
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(true);
    const uuid_user = useSelector(state => state.user.uuid_user)

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const firstName = useSelector(state => state.partner.first_name)
    const lastName = useSelector(state => state.partner.last_name)
    const course = useSelector(state => state.partner.course)
    const yearLevel = useSelector(state => state.partner.year_level)
    const interest = useSelector(state => state.partner.interest)
    const profilePic = useSelector(state => state.partner.image)
    const stats = useSelector(state => state.partner.stats)
    const reload = useSelector(state => state.partner.reload)
    const studyPartners = useSelector(state => state.partner.studyPartners)
    const resultSize = useSelector(state => state.partner.resultSize)
    const uuid_partner = useSelector(state => state.partner.uuid_user)
    const count = useSelector(state => state.partner.count)

    const [dupModal, setDupModal] = useState(false);

    useEffect(() => {
        if(session == null) {
            mlService.loadStudyPartners(uuid_user)
            .then(response => {
                dispatch(setStudyPartners(response.data))
                dispatch(setSize(response.data.length))
                dispatch(setPartner(response.data[count]))
                setLoading(false)
            })
        } else {
            mlService.loadGroupStudyPartners(session.users)
            .then(response => {
                dispatch(setStudyPartners(response.data))
                dispatch(setSize(response.data.length))
                dispatch(setPartner(response.data[count]))
                setLoading(false)
            })
        }
    }, [])

    const accept = () => {
        if (session==null) {
            navigation.navigate('UserCreateSession')
        } else {
            invitationService.sendInvitation(session.uuid_session,uuid_user, uuid_partner)
            .then(response => {
                console.log(response.data)
                if(response.status == 200) {
                    dispatch(setReload(true))
                    navigation.navigate('UserDashboard')
                } 
            }).catch(error=> {
                setDupModal(true)
            })

        }
    }

    const nextPartner = () => {
        if (count == resultSize-1) {
            dispatch(setPartner(studyPartners[0]))
            dispatch(setCount(0))
        } else {
            dispatch(setPartner(studyPartners[count+1]))
            dispatch(setCount(count+1))
        }
    }

    if (!fontsLoaded || isLoading) {
        return <Loading />
    } else {
        return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={dupModal}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.text1}>An invitation has already been sent to this user!</Text>
                    <TouchableOpacity style={styles.button2} onPress={() => setDupModal(false)}>
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
                    <UserInfo profilePic={profilePic} firstName={firstName} lastName={lastName} course={course} yearLevel={yearLevel} interest={interest} isActive={true} />
                </View>
                
                <Stats stats={stats} />
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={accept}>
                            <Image
                            style={styles.images}
                            source={require('../../assets/images/check-button.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={nextPartner}>
                            <Image
                            style={styles.images}
                            source={require('../../assets/images/next.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            
           <BottomNav/>   
       </View>
        );
    }
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
        paddingBottom: 60,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 0,
        paddingTop: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
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
        marginBottom: 2,
        marginTop: 5
        
    },
    header:{
      alignItems: 'center',
      marginTop: '30%'

    },
    images: {
      width: undefined,
      aspectRatio: 1,
      height: '35%',
      marginHorizontal: 20
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
});