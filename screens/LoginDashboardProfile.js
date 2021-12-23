import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image,  } from 'react-native';
import Background from '../assets/images/profile-bg.svg'
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

  export default function LoginDashboardProfile({navigation}) {
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
                    <Text style={styles.text1}>
                        Profile
                    </Text> 
                </View>
                <View style={styles.header}>
                  <FontAwesomeIcon icon={faUserCircle} size={100} color={'#EF4765'}/>
                    <Text style={styles.text2}>Name</Text>
                    <Text style={styles.text3}>Course</Text>
                    <Text style={styles.text3}>Year</Text>
                </View>
                <View style={styles.menucontainer}>
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity>
            <Image
              style={styles.images}
              source={require('../assets/images/user-plus.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.column}>

          <TouchableOpacity>
            <Image
              style={styles.images}
              source={require('../assets/images/people-fill.png')} />
          </TouchableOpacity>
          </View>
          <View style={styles.column}>

          <TouchableOpacity>
            <Image
              style={styles.images}
              source={require('../assets/images/chat-text.png')} />
          </TouchableOpacity>
          </View>
          <View style={styles.column}>

          <TouchableOpacity style={styles.press}>
            <Image
              style={styles.images}
              source={require('../assets/images/table.png')} />
          </TouchableOpacity>
          </View>
          </View>
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
        justifyContent: 'center',
        width: '100%',
        height: '100%' 
    },
    half: {
        width: '100%',
        height: '35%',
        position: 'absolute',
        zIndex: 0,
        elevation: 0,
        top: 0
    },
    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 428/562,
        position: 'absolute',
        bottom: 0
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

    header:{
        alignItems: 'center',
        marginBottom: '40%',
        marginTop: '48%'
    },
    
    menucontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: '#BFBFBF',
        borderTopWidth: 1,
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      column: {
        flexDirection: 'column',
        width: '50%',
      },
      images: {
        width: 165,
        height: 90,
        margin: 5,
        marginBottom: 25,
        marginTop: 0,
        resizeMode: 'contain',
      },
});