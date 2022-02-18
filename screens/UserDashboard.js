import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image,  } from 'react-native';
import Background from '../assets/images/profile-bg.svg'
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import * as Progress from 'react-native-progress';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

  export default function UserDashboard({navigation}) {
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
                <View style={styles.header}>
                    <FontAwesomeIcon icon={faUserCircle} size={100} color={'#EF4765'}/>
                    <Text style={styles.text2}>Name</Text>
                    <Text style={styles.text3}>Course</Text>
                    <Text style={styles.text3}>Year</Text>
                </View>
                <View style={styles.statsContainer}>
                  <Text style={styles.text3}>
                      Study Habits
                  </Text>
                  <Text style={styles.text4}>
                      Time Management
                  </Text>
                  <Progress.Bar progress={0.5} width={null} color='#EF4765'/>
                  <Text style={styles.text4}>
                      Study Environment
                  </Text>
                  <Progress.Bar progress={0.5} width={null} color='#EF4765'/>
                  <Text style={styles.text4}>
                      Exam Preparation
                  </Text>
                  <Progress.Bar progress={0.2} width={null} color='#EF4765'/>
                  <Text style={styles.text4}>
                      Note Taking
                  </Text>
                  <Progress.Bar progress={0.3} width={null} color='#EF4765'/>
                  <Text style={styles.text4}>
                      Reading Skills
                  </Text>
                  <Progress.Bar progress={0.4} width={null} color='#EF4765'/>
                  <Text style={styles.text4}>
                      Writing Skills
                  </Text>
                  <Progress.Bar progress={0.5} width={null} color='#EF4765'/>
                  <Text style={styles.text4}>
                      Math Skills
                  </Text>
                  <Progress.Bar progress={0.5} width={null} color='#EF4765'/>
                  <View style={{ alignItems: 'center'}}>
                  <TouchableOpacity
                          style={styles.button}
                  >
                      <Text style={styles.buttontext}>Update</Text>
                  </TouchableOpacity>
                  </View>
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
  button: {
    backgroundColor: '#EF4765',
    width: '40%',
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
    statsContainer : {
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
        marginTop: 15,
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 15,
        
    },
    text3: {
        fontFamily: 'Poppins_400Regular',
        color: '#BBBBBB',
        fontSize: 12
        
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
      marginTop: '40%'
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
});