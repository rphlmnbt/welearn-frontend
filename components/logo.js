import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';
import Assets from '../assets/Assets'

export default function Logo({title}) {
    return (
        <View style={styles.header}>       
            <Image source={Assets.logoHeader} style={styles.image} />
            <Text style={styles.text}>WeLearn</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        margin: 0,
        alignItems: 'center'
    },
    image: {
        margin: 0,
        padding: 0,
        width: 70,
        height: 70
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 16,
        color: 'white'
    }
});