import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BackButton from '../assets/images/back-white.svg'

export default function BackWhite() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('LoginHome')}
        >
            <BackButton style={styles.image}/>
        </TouchableOpacity>
        
      );

}

const styles = StyleSheet.create({
    image: {
        margin: 15,
        width: 10,
        height: 15

    }
});
