import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, Modal  } from 'react-native';
import Background from '../assets/images/profile-bg.svg'
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle, faBook, faImage, faSignOutAlt, faCircle } from '@fortawesome/free-solid-svg-icons';
import * as Progress from 'react-native-progress';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

  export default function Settings({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                 <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.text4}>Set Status</Text>
                        <TouchableOpacity style={styles.settingsItem}  onPress={() => setModalVisible(true)}>
                            <FontAwesomeIcon icon={faCircle} size={15} color={'#22C382'} style={{alignSelf: 'center'}}/>
                            <Text style={styles.text5}>Online</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsItem}  onPress={() => setModalVisible(true)}>
                            <FontAwesomeIcon icon={faCircle} size={15} color={'#D43455'} style={{alignSelf: 'center'}}/>
                            <Text style={styles.text5}>Offline</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <View style={styles.half}>
                    <Background
                        style={styles.background}
                        resizeMode="cover" 
                    />
                </View>
                <View style={styles.header}>
                    <FontAwesomeIcon icon={faUserCircle} size={100} color={'#EF4765'}/>
                    
                    <View style={styles.infoContainer}>
                        <Text style={styles.text2}>Name</Text>
                        <Text style={styles.text3}>Course</Text>
                        <Text style={styles.text3}>Year</Text>
                        <Text style={styles.text3}>Interests</Text>
                    </View>              
                </View>
               <View style={styles.settingsContainer}>
                <Text style={styles.text4}>
                      USER SETTINGS
                  </Text>
                    <TouchableOpacity style={styles.settingsItem}  onPress={() => setModalVisible(true)}>
                        <FontAwesomeIcon icon={faUserCircle} size={30} color={'#ACACAC'}/>
                        <Text style={styles.text5}>Set User Status</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsItem} onPress={() => navigation.navigate('FindPartner')}>
                        <FontAwesomeIcon icon={faBook} size={30} color={'#ACACAC'}/>
                        <Text style={styles.text5}>Set Your Interests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsItem} onPress={() => navigation.navigate('FindPartner')}>
                        <FontAwesomeIcon icon={faImage} size={30} color={'#ACACAC'}/>
                        <Text style={styles.text5}>Change Profile Picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsItem} onPress={() => navigation.navigate('FindPartner')}>
                        <FontAwesomeIcon icon={faSignOutAlt} size={30} color={'#EF4765'}/>
                        <Text style={styles.text6}>Log Out</Text>
                    </TouchableOpacity>
               </View>
                <View style={styles.menucontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('FindPartner')}>
                        <Image
                        style={styles.images}
                        source={require('../assets/images/user-plus.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('UserReservations')}>
                        <Image
                        style={styles.images}
                        source={require('../assets/images/table.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Requests')}>
                        <Image
                        style={styles.images}
                        source={require('../assets/images/people-fill.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginHome')}>
                        <Image
                        style={styles.images}
                        source={require('../assets/images/logout.png')} />
                    </TouchableOpacity>
                </View>  
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
        zIndex:5
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
    }
});