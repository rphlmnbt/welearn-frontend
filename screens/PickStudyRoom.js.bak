import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image,  } from 'react-native';
import Background from '../assets/images/find-bg.svg'
import AppLoading from 'expo-app-loading';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

  export default function PickStudyRoom({navigation}) {

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
               <Text style={styles.text1}>Hello, Student!</Text>
               <Text style={styles.text2}>Pick your discussion Room</Text>
            </View>
            <View style={styles.menucontainer}>
            <Text style={styles.text3}>Library-2</Text>
                  <View style={styles.row}>
                    <View style={styles.column}>
                      <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/room-1.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                      <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/room-2.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                      <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/room-3.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                      <TouchableOpacity onPress={() => navigation.navigate('')}>
                      <Image
                          style={styles.images}
                          source={require('../assets/images/room-4.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/room-5.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/room-6.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/room-7.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/room-8.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/room-9.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/room-10.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/room-11.png')} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image
                          style={styles.images}
                          source={require('../assets/images/room-12.png')} />
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
    text1 : {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        fontSize: 14,
        marginLeft: 30,
        marginBottom: 5,
        marginTop: '-27%'
        
    },

    text2 : {
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        marginLeft: 30,
        fontSize: 18,
        

    },
    text3 : {
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        alignItems: 'center',
        fontSize: 38,
        marginTop: 15,
        
    },

    menucontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    column: {
      flexDirection: 'column',
      width: '33%',
    },

    images: {
        width: 100,
        height: 100,
        margin: 12,
        resizeMode: 'contain',
      },
});