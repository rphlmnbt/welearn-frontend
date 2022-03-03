import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, Platform, } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import Background from '../assets/images/login-mobile-bg.svg'
import AppLoading from 'expo-app-loading';
import { changeImage } from '../actions/signUpActions';
import { Formik } from 'formik';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'


export default function SignUpImageUpload({navigation}) { 
    const [image, setImage] = useState(null);
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const handleSubmit = (values) => {
        console.log(values)
        navigation.navigate('SignUpSurveyIntro')     
    }

    const pickImage = async () => {
        await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1,1],
          quality: 1,
        }).then((response => {
            console.log(response)
            setImage({
                uri: response.uri,
                name: uuid_user + '.jpg',
                type: 'image/jpg',
              }) 
            dispatch(changeImage(response.uri))
        }))    
    };    

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
    return (
        <Formik
            initialValues={{
                interest:''
            }}
            onSubmit={handleSubmit}
        >
        {({ handleChange, handleBlur, handleSubmit,values }) => (
        <View style={styles.container}>
            <View style={styles.half}>
                <Background
                    style={styles.background}
                    resizeMode="cover" 
                />
                <View style={styles.imagecontainer}>
                    {image && <Image source={{ uri: image }} style={{ width: 350, height: 300, marginBottom: 15}} />}   
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

});