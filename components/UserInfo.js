import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
export default function UserInfo(props) {

    return (
        <View style={styles.header}>
            {props.profilePic != null &&
                <Image
                    style={styles.image}
                    source={{
                        uri: props.profilePic + '?' + new Date()
                    }}
                />
            }
            {props.profilePic == null &&
                <FontAwesomeIcon icon={faUserCircle} size={100} color={'#EF4765'}/>
            }
            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>{props.firstName} {props.lastName}</Text>
                <Text style={styles.infoText}>{props.course}</Text>
                <Text style={styles.infoText}>{props.yearLevel}</Text>
                <Text style={styles.infoText}>{props.interest}</Text>
                {props.isActive &&
                    <View style={styles.statusContainer}>
                        <FontAwesomeIcon icon={faCircle} size={10} color={'#22C382'} style={{marginTop: 4}}/>
                        <Text style={styles.infoText}> Online</Text>
                    </View>
                }
                {!props.isActive &&
                    <View style={styles.statusContainer}>
                        <FontAwesomeIcon icon={faCircle} size={10} color={'#D43455'} style={{marginTop: 4}}/>
                        <Text style={styles.infoText}> Offline</Text>
                    </View>
                }
            </View>              
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
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
    statusContainer: {
        flexDirection: 'row'
    },
    image : {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 10
    }
})