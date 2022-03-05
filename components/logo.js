import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';
import HeaderLogo from '../assets/images/logo-header1.png'
import AppLoading from 'expo-app-loading';
import { 
    useFonts,
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black
  } from '@expo-google-fonts/poppins'

export default function Logo() {
    let [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_200ExtraLight,
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        Poppins_900Black
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.header}>       
            <Image source={HeaderLogo} style={styles.image}/>
                <Text style={styles.text}>WeLearn</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        margin: 0,
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        aspectRatio: 1
    },
    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        color: 'white'
    }
});