import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import Assets from '../assets/Assets'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function BackIcon() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('LoginHome')}
        >
            <Image source={Assets.backIcon} style={styles.image}/>
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
