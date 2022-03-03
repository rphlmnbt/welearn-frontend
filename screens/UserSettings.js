import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, Modal  } from 'react-native';
import Background from '../assets/images/profile-bg.svg'
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle, faBook, faImage, faSignOutAlt, faCircle } from '@fortawesome/free-solid-svg-icons';
import imageService from '../services/image.service';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import { TextInput } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import BottomNav from '../components/BottomNav';
import * as ImagePicker from 'expo-image-picker'
import UserInfo from '../components/UserInfo';
import { setStatus } from '../actions/userActions';
import { setInterest } from '../actions/userActions';
import userService from '../services/user.service';
import axios from 'axios';
import { uploadImage } from '../actions/userActions';

  export default function UserSettings({navigation}) {
    const [statusModal, setStatusModal] = useState(false);
    const [interestModal, setInterestModal] = useState(false);
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');
    const dispatch = useDispatch()

    const uuid_user = useSelector(state => state.user.uuid_user)
    const firstName = useSelector(state => state.user.first_name)
    const lastName = useSelector(state => state.user.last_name)
    const course = useSelector(state => state.user.course)
    const yearLevel = useSelector(state => state.user.year_level)
    const interest = useSelector(state => state.user.interest)
    const isActive = useSelector(state => state.user.isActive)
    const profilePic = useSelector(state => state.user.image)
    

    useEffect(() => {
        if (image != null) {
            imageService.uploadImage(image, uuid_user)
            userService.uploadImage(uuid_user, image.name)
        }
        return () => {
            // cancel the subscription
            setImage(null);
        };
    }, [image])

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const setActive = () =>  {
        setStatusModal(false)
        userService.updateStatus(uuid_user, true)
        dispatch(setStatus(true))
    }

    const setInactive = () =>  {
        setStatusModal(false)
        userService.updateStatus(uuid_user, false)
        dispatch(setStatus(false))
    }

    
    const changeInterest = () =>  {
        setInterestModal(false)
        userService.updateInterest(uuid_user, text)
        dispatch(setInterest(text))
    }

    
    const pickImage = async () => {
        await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1,1],
          quality: 1,
        }).then((response => {
            console.log(response)
            
            if (!response.cancelled) {
                setImage({
                    uri: response.uri,
                    name: uuid_user + '.jpg',
                    type: 'image/jpg',
                  }) 
                dispatch(uploadImage(response.uri))
            }
        }))    
    };    
   
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                 <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={statusModal}
                    
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.text4}>Set Status</Text>
                        <TouchableOpacity style={styles.settingsItem}  onPress={setActive}>
                            <FontAwesomeIcon icon={faCircle} size={15} color={'#22C382'} style={{alignSelf: 'center'}}/>
                            <Text style={styles.text5}>Online</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsItem}  onPress={setInactive}>
                            <FontAwesomeIcon icon={faCircle} size={15} color={'#D43455'} style={{alignSelf: 'center'}}/>
                            <Text style={styles.text5}>Offline</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={interestModal}
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.text4}>Set Interests</Text>
                        <TextInput
                            placeholder="Interests"
                            autoCapitalize="none"
                            style={styles.textinput1}
                            onChangeText={(input) => setText(input)}
                        />
                         <TouchableOpacity
                                style={styles.button}
                                onPress={changeInterest}
                            >
                                <Text style={styles.buttontext}> Continue</Text>
                            </TouchableOpacity>
                    </View>
                </Modal>
                <View style={styles.half}>
                    <Background
                        style={styles.background}
                        resizeMode="cover" 
                    />
                </View>
                <View style={{marginTop: '45%'}}>
                    <UserInfo profilePic={profilePic} firstName={firstName} lastName={lastName} course={course} yearLevel={yearLevel} interest={interest} isActive={isActive} />
                </View>
                <View style={styles.settingsContainer}>
                    <Text style={styles.text4}>
                        USER SETTINGS
                    </Text>
                        <TouchableOpacity style={styles.settingsItem}  onPress={() => setStatusModal(true)}>
                            <FontAwesomeIcon icon={faUserCircle} size={30} color={'#ACACAC'}/>
                            <Text style={styles.text5}>Set User Status</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsItem} onPress= {()=> setInterestModal(true)}>
                            <FontAwesomeIcon icon={faBook} size={30} color={'#ACACAC'}/>
                            <Text style={styles.text5}>Set Your Interests</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsItem} onPress={pickImage}>
                            <FontAwesomeIcon icon={faImage} size={30} color={'#ACACAC'}/>
                            <Text style={styles.text5}>Change Profile Picture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsItem} onPress={() => navigation.navigate('LoginHome')}>
                            <FontAwesomeIcon icon={faSignOutAlt} size={30} color={'#EF4765'}/>
                            <Text style={styles.text6}>Log Out</Text>
                        </TouchableOpacity>
                </View>
                <BottomNav/>
            </View>
        );
    }
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    settingsItem: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30
    },
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
        zIndex:5,
        alignSelf: 'center'
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },
    settingsContainer : {
        width: '100%',
        padding: 30
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
        fontSize: 20,
        
    },
    text3: {
        fontFamily: 'Poppins_400Regular',
        color: '#777777',
        fontSize: 12
        
    },
    text4 : {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 18,
        marginTop: 5
    },
    text5: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 16,
        marginLeft: 15,
        alignSelf: 'center'
        
    },
    text6: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#EF4765',
        fontSize: 16,
        marginLeft: 15,
        alignSelf: 'center'
        
    },
    infoContainer: {
        paddingLeft: 10
    },  
    header:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: '40%',
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
    textinput1:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding:8,
        width: '100%',
        marginTop: 10
    },
});