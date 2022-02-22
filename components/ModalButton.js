import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, Button} from 'react-native';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'




export default function ModalButton(){

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    state = {
        modalVisible: false
      };
    
      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }

      const { modalVisible } = this.state;

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
    return(
        <View>
            
        </View>
        )
    }

}

const styles = StyleSheet.create({

});
