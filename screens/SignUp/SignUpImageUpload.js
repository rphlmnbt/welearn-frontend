import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, Platform, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import Background from '../../assets/images/login-mobile-bg.svg'
import AppLoading from 'expo-app-loading';
import { changeImage } from '../../actions/signUpActions';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'


export default function SignUpImageUpload({navigation}) { 
    const dispatch = useDispatch()
    const [image, setImage] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const handleSubmit = () => {
        // if (image != null) {
        //     navigation.navigate('SignUpSurveyIntro')   
        // } 
        // else {
        //     setOpenModal(true)
        // }
        // console.log(image)
        navigation.navigate('SignUpSurveyIntro')   
       
    }

    const pickImage = async () => {
        await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1,1],
          quality: 0.5,
        }).then((response => {
            if (!response.cancelled) {
                console.log(response)
                setImage({
                    uri: response.uri,
                }) 
                dispatch(changeImage(response.uri))
              }
            
        }))    
    };    

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
    return (
        <Formik
            initialValues={{
            }}
            onSubmit={handleSubmit}
        >
        {({ handleChange, handleBlur, handleSubmit,values }) => (
        <View style={styles.container}>
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={openModal}
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.text4}>Image is Required.</Text>
                        <TouchableOpacity style={styles.button3} onPress={() => setOpenModal(false)}>
                            <Text style={styles.buttontext}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            <View style={styles.half}>
                <Background
                    style={styles.background}
                    resizeMode="cover" 
                />
                <View style={styles.imagecontainer}>
                    {image && 
                        <Image source={image} style={{ width: 300, height: 300, borderRadius: 150}} />
                    }   
                    {!image &&
                        <FontAwesomeIcon icon={faUserCircle} size={300} color={'#EF4765'}/>
                    }
                    <TouchableOpacity
                        style={styles.button}
                        onPress={pickImage}
                    >
                    <Text style={styles.buttontext}>Choose Profile Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={handleSubmit}
                    >
                    <Text style={styles.buttontext}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
       )}
       </Formik> 
       
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
        
    },

    half: {
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 0,
        elevation: 0,
        bottom: 0,
        
    },

    button: {
        backgroundColor: '#EF4765',
        width: '50%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%',
        marginTop: 30
        
    },

    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },

    imagecontainer:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },

    button2: {
        backgroundColor: '#EF4765',
        width: '50%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50%'
        
        
    },

    modalContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: '70%',
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

    button3: {
        backgroundColor: '#EF4765',
        width: '40%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 40
    },


});