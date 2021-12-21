import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import LogoHeader from '../assets/images/wl-white.png'

export default function secondaryLogo({title}) {
    return (
        <View style={styles.container}>
            <Image source={LogoHeader} style={styles.image} />
        </View>
       
      );

}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'row',
        margin: 0,
        alignItems: 'center',
        padding: 0,
        justifyContent: 'flex-end'
    },
    image: {
        marginRight: 20,
        padding: 0,
        width: 90,
        height: 40

    }
});
