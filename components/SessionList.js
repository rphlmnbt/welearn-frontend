import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function SessionList(props) {
    return (
        <View key={props.element.uuid_session} style={styles.userdetails}>
            <Image
                style={styles.images}
                source={require('../assets/images/room.png')} 
            />
            <View style={styles.textsection}>
                <View style={styles.usertext}>
                    <Text style={styles.name}>{props.element.session_name}</Text>
                </View>
                <View style={styles.usertext}>
                    <Text style={styles.userinfo}>{props.element.date}</Text>
                    <Text style={styles.userinfo}>{props.element.time}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userdetails:{
        width: '100%',
        height: 100,
        flexDirection: 'row',   
        justifyContent: 'flex-start',
        paddingTop: 15,
        paddingBottom: 15,
    },
    images:{
        width: 60,
        height: 60,

    },
    textsection:{
        flexDirection: 'column',   
        justifyContent: 'center',
        padding: 20,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
    },
    usertext:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    name:{
        fontSize: 14,
        fontFamily: 'Poppins_600SemiBold',
        marginBottom:2
    },
    userinfo:{
        fontSize: 14,
        color: '#ACACAC',
        
    } 
})