import React from 'react';
import { StyleSheet, View, Text, Dimensions  } from 'react-native';
import Background from '../assets/images/profile-bg.svg'
import AppLoading from 'expo-app-loading';
import { useSelector } from 'react-redux';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import BottomNav from '../components/BottomNav';
import Stats from '../components/Stats';
import UserInfo from '../components/UserInfo';

  export default function UserDashboard({navigation}) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });
    const firstName = useSelector(state => state.user.first_name)
    const lastName = useSelector(state => state.user.last_name)
    const course = useSelector(state => state.user.course)
    const yearLevel = useSelector(state => state.user.year_level)
    const interest = useSelector(state => state.user.interest)
    const stats = useSelector(state => state.user.stats)
    const activeStatus = useSelector(state => state.user.activeStatus)
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.half}>
                    <Background
                        style={styles.background}
                        resizeMode="cover" 
                    />
                </View>
            <UserInfo firstName={firstName} lastName={lastName} course={course} yearLevel={yearLevel} interest={interest} activeStatus={activeStatus} />
                <Stats stats={stats} />
                <BottomNav /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%' , 
    },
    half: {
        width: '100%',
        height: '50%',
        position: 'absolute',
        zIndex: 0,
        elevation: 0,
        top: 0
    },
    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 428/287,
        position: 'absolute',
        top: '-25%'
    }
});