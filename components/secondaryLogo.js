import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import Assets from '../assets/Assets'

export default function secondaryLogo({title}) {
    return (
        <View style={styles.container}>
            <Image source={Assets.secondarylogoHeader} style={styles.image} />
        </View>
       
      );

}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: '100%',
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
        width: 100,
        height: 50

    },

    text: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 16,
        color: 'white',
        marginRight: 30
    },

    button: {
        width: 0.05*vw,
        height: 50,
        marginTop: -73

    }
});
