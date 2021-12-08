import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Assets from '../assets/Assets'

export default function secondaryLogo({title}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Assets.secondarylogoHeader} style={styles.image} />
            </View>

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <FontAwesomeIcon icon={faAngleLeft} size='20' color='white'/>
                </TouchableOpacity>
            </View>

        </View>
       
      );

}

const styles = StyleSheet.create({
    header: {
        width: '100vw',
        height: '100%',
        flexDirection: 'row',
        margin: 0,
        alignItems: 'center',
        padding: 0,
        justifyContent: 'space-between'

    
    },
    image: {
        margin: 0,
        padding: 0,
        width: 100,
        height: 50,
        marginLeft: 270

    },

    text: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 16,
        color: 'white',
        marginRight: 30
    },

    button: {
        width: '5vw',
        height: 50,
        marginTop: -73

    }
});
