import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { faUserCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {API_URL} from '@env'

export default function UserList(props) {

    const IMG_URL = API_URL +'/image/'

    return (
        <View style={styles.header} key={props.element.uuid_user}>
            {props.element.user_detail.src != null &&
                <Image
                    style={styles.image}
                    source={{
                        uri:  IMG_URL + props.element.uuid_user + '?' + new Date()+ '?' + new Date()
                    }}
                />
            }
            {props.element.user_detail.src == null &&
                <FontAwesomeIcon icon={faUserCircle} size={100} color={'#EF4765'} style={{marginTop:5}}/>
            }
            <View key={props.element.uuid_user} style={styles.infoContainer}>
                    <Text style={styles.nameText}>{props.element.user_detail.first_name} {props.element.user_detail.last_name}</Text>
                    <Text style={styles.infoText}>{props.element.user_detail.course}</Text>
                    <Text style={styles.infoText}>{props.element.user_detail.year_level}</Text>
                    <Text style={styles.infoText}>{props.element.user_detail.interest}</Text>
                    <Text style={styles.infoText}>{props.element.email}</Text>
                    <Text style={styles.infoText}>{props.element.user_detail.contact_number}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
  
    },
    infoContainer: {
        paddingLeft: 20
    },  
    nameText : {
        marginTop: 5,
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 14,
        
    },
    infoText: {
        fontFamily: 'Poppins_400Regular',
        color: '#777777',
        fontSize: 12
        
    },
    image : {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 5
    },

})