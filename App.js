import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import Logo from './components/Logo';
import SecondaryLogo from './components/SecondaryLogo'
import LoginHome from './screens/LoginHome';
import LoginEmail from './screens/LoginEmail';
import LoginMobile from './screens/LoginMobile'
import SecondaryLogoBlack from './components/SecondaryLogoBlack';
import LoginMobilePin from './screens/LoginMobilePin';
import BackWhite from './components/BackWhite';
import BackBlack from './components/BackBlack';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={Header}
        initialRouteName="LoginHome"
      >
        <Stack.Screen 
          name="LoginHome" 
          component={LoginHome} 
          options = {{headerTitle: () => <Logo />}}
        />
        <Stack.Screen 
          name="LoginEmail" 
          component={LoginEmail} 
          options = {{headerTitle: () => null,
            headerRight: () => <SecondaryLogo />,
            headerLeft: () => <BackWhite />}}
        />
        <Stack.Screen 
          name="LoginMobile" 
          component={LoginMobile} 
          options = {{headerTitle: () => null,
            headerRight: () => <SecondaryLogoBlack />,
            headerLeft: () => <BackBlack />}}
        />
         <Stack.Screen 
          name="LoginMobilePin" 
          component={LoginMobilePin} 
          options = {{headerTitle: () => null,
            headerRight: () => <SecondaryLogoBlack />,
            headerLeft: () => <BackBlack />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;