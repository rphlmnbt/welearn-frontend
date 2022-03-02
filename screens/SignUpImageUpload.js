import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, Platform, } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import Background from '../assets/images/login-mobile-bg.svg'
import AppLoading from 'expo-app-loading';
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

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1,1],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };

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
                        onPress={() => navigation.navigate('SignUpSurveyIntro')}>
                    <Text style={styles.buttontext}>Continue</Text>
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