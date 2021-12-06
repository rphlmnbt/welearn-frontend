import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Assets from '../assets/Assets'

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground 
            source={Assets.loginBackground} 
            resizeMode="cover" 
            style={styles.background} 
            imageStyle={{
                aspectRatio: 1,
                resizeMode: "center",
                alignSelf: "flex-end",
                top: undefined
            }}> 
                        
            </ImageBackground>
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    background: {
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 270

    }
});