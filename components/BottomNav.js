import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BottomNav() {
    const navigation = useNavigation();

    return (
        <View style={styles.menucontainer}>
            <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
                <Image
                style={styles.images}
                source={require('../assets/images/home.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserFindPartner')}>
                <Image
                style={styles.images}
                source={require('../assets/images/user-plus.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserReservations')}>
                <Image
                style={styles.images}
                source={require('../assets/images/table.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserRequests')}>
                <Image
                style={styles.images}
                source={require('../assets/images/people-fill.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserSettings')}>
                <Image
                style={styles.images}
                source={require('../assets/images/settings.png')} />
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
    },
    images: {
        width: 45,
        height: 45,
        margin: 10
    },
});
