import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';
import HeaderLogo from '../assets/images/logo-header1.png'

export default function Logo() {

    return (
        <View style={styles.header}>       
           <Image source={HeaderLogo} style={styles.image}/>
            <Text style={styles.text}>WeLearn</Text>
        </View>
      );
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
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 16,
        color: 'white'
    }
});