import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BottomNav() {
    const navigation = useNavigation();

    return (
        <View style={styles.menucontainer}>
            <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
                <Image
                style={styles.images}
                source={require('../assets/images/home.png')} />
                <Text style={styles.text}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserSessionType')}>
                <Image
                style={styles.images}
                source={require('../assets/images/user-plus.png')} />
                <Text style={styles.text}>CREATE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserReservations')}>
                <Image
                style={styles.images}
                source={require('../assets/images/table.png')} />
                <Text style={styles.text}>VIEW ALL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserRequests')}>
                <Image
                style={styles.images}
                source={require('../assets/images/people-fill.png')} />
                <Text style={styles.text}>REQUESTS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserSettings')}>
                <Image
                style={styles.images}
                source={require('../assets/images/settings.png')} />
                <Text style={styles.text}>SETTINGS</Text>
            </TouchableOpacity>
        </View>  
        
    );

}

const styles = StyleSheet.create({
    menucontainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopColor: '#ACACAC',
        borderTopWidth: 1,
        backgroundColor: "#F2F2F2"
    },
    images: {
        width: 45,
        height: 45,
        margin: 8
    },

    text: {
        color: '#ACACAC',
        fontFamily: 'Poppins_500Medium',
        textAlign: 'center',
        marginBottom: 2
        
    }
});
