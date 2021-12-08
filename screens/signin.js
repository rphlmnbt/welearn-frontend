import * as React from 'react';
import { StyleSheet, View, Image, Dimensions} from 'react-native';
import { Card } from 'react-native-elements'
import Assets from '../assets/Assets'


function SignIn() {
    return (
        <View style={styles.container}>
            <View style={styles.half}>
                <Image
                    style={styles.background}
                    source={Assets.signinBackground}
                    resizeMode="cover" 
                />
            </View>
            <Image
                style={styles.splash}
                source={Assets.signinSplash}
                resizeMode="stretch" 
            />
            <Card containerStyle={styles.card}>
               
          </Card>
            
        </View>
    );
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export default SignIn

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        height: '100%' 
    },
    half: {
        width: '100%',
        height: '80%',
        position: 'absolute',
        zIndex: 0,
        elevation: 0,
        top: 0
    },
    background: {
        width: '100%',
        aspectRatio: 328/562,
        position: 'absolute',
        bottom: 0
        
    },
    splash: {
        width: 0.6*vw,
        height: undefined,
        aspectRatio: 335/263
    },
    card: {
        width: '80%',
        height: 0.40*vh,
        borderRadius: 13,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2, 
    }

});

