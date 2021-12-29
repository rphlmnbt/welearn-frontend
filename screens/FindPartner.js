import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image,  } from 'react-native';
import Background from '../assets/images/find-bg.svg'
import AvatarImg from '../assets/images/avatar.png'
import AppLoading from 'expo-app-loading';
import * as Progress from 'react-native-progress';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

  export default function FindPartner({navigation}) {
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
            <View style={styles.half}>
               <Background
                   style={styles.background}
                   resizeMode="cover" 
               />
            </View>
            <Image
                source={AvatarImg}
                style={styles.images}
            />
            <View style={styles.userdetails}>
                <Text style={styles.text1}>
                   Name, Year Level, Course
                </Text>
                <Text style={styles.text2}>
                    This student is looking to study this topic: Calculus
                </Text>
                <Text style={styles.text3}>
                    Study Habits
                </Text>
                <Text style={styles.text4}>
                   lorem ipsum
                </Text>
                <Progress.Bar progress={0.5} width={null} color='#EF4765'/>
                <Text style={styles.text4}>
                   lorem ipsum
                </Text>
                <Progress.Bar progress={0.2} width={null} color='#EF4765'/>
                <Text style={styles.text4}>
                   lorem ipsum
                </Text>
                <Progress.Bar progress={0.3} width={null} color='#EF4765'/>
                <Text style={styles.text4}>
                   lorem ipsum
                </Text>
                <Progress.Bar progress={0.4} width={null} color='#EF4765'/>
                <Text style={styles.text4}>
                   lorem ipsum
                </Text>
                <Progress.Bar progress={0.5} width={null} color='#EF4765'/>
            </View>

              
       </View>
        );
    }
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
        height: '40%',
        padding: 25,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
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
      width: '100%',
      marginTop: '35%',
      borderRadius: 30,
      borderWidth: 1
    },
});