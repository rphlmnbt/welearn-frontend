import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'


export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
});
if (!fontsLoaded) {
    return <AppLoading />;
} else {
    return (
      <View style={styles.container}>
        {data.map((item) => {
          return (
            <TouchableOpacity 
              onPress={() => setUserOption(item.value)}
              style={item.value === userOption ? styles.selected : styles.unselected}
            >
              <Text style={item.value === userOption ? styles.selectedButtonText : styles.unselectedButtonText}> {item.value}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
      }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15
  },
  option: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  unselected: {
    borderColor: '#ACACAC',
    borderWidth: 2,
    width: '47%',
    height: 45,
    borderRadius: 5,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedButtonText: {
    color: '#EF4765',
    fontFamily: 'Poppins_600SemiBold',
    letterSpacing: 0.3
  },
  unselectedButtonText: {
    color: '#ACACAC',
    fontFamily: 'Poppins_600SemiBold',
    letterSpacing: 0.3
  },
  selected: {
    borderColor: '#EF4765',
    borderWidth: 2,
    width: '47%',
    height: 45,
    borderRadius: 5,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
});