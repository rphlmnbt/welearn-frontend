import React from 'react'
import { StyleSheet, ActivityIndicator, View, Image} from 'react-native';
import LoginLogoImg from '../assets/images/logo2.png'

export default function Loading() {
    return (
        <View style={[styles.actContainer, styles.horizontal]}>
            <Image
                style={styles.splash}
                source={LoginLogoImg}
                resizeMode="contain" 
            />
            <ActivityIndicator />
            <ActivityIndicator size="large" color="#EF4765" />
        </View>
    )
}

const styles = StyleSheet.create({
    actContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    horizontal: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
    },
    splash: {
        width: 130,
        height: undefined,
        aspectRatio: 1,
        margin: 10
    },
})