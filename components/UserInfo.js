import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function UserInfo(props) {
    return (
        <View style={styles.header}>
            <FontAwesomeIcon icon={faUserCircle} size={100} color={'#EF4765'}/>
            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>{props.firstName} {props.lastName}</Text>
                <Text style={styles.infoText}>{props.course}</Text>
                <Text style={styles.infoText}>{props.yearLevel}</Text>
                <Text style={styles.infoText}>{props.interest}</Text>
                <Text style={styles.infoText}>{props.activeStatus}</Text>
            </View>              
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: '45%',
        paddingHorizontal: 30
    },
    infoContainer: {
        paddingLeft: 10
    },  
    nameText : {
        marginTop: 5,
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 18,
        
    },
    infoText: {
        fontFamily: 'Poppins_400Regular',
        color: '#777777',
        fontSize: 12
        
    },
})