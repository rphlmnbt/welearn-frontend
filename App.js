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
import SignUpPersonal from './screens/SignUpPersonal';
import SignUpBirth from './screens/SignUpBirth';
import SignUpContract from './screens/SignUpContract';
import SignUpContact from './screens/SignUpContact';
import SignUpSchool from './screens/SignUpSchool';
import SignUpCourse from './screens/SignUpCourse';



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
          options = {{headerTitle: () => null}}
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
        <Stack.Screen 
          name="SignUpPersonal" 
          component={SignUpPersonal} 
          options = {{headerTitle: () => null}}
        />
        <Stack.Screen 
          name="SignUpBirth" 
          component={SignUpBirth} 
          options = {{headerTitle: () => null}}
        />
        <Stack.Screen 
          name="SignUpContract" 
          component={SignUpContract} 
          options = {{headerTitle: () => null}}
        />
         <Stack.Screen 
          name="SignUpContact" 
          component={SignUpContact} 
          options = {{headerTitle: () => null}}
        />
        <Stack.Screen 
          name="SignUpSchool" 
          component={SignUpSchool} 
          options = {{headerTitle: () => null}}
        />
        <Stack.Screen 
          name="SignUpCourse" 
          component={SignUpCourse} 
          options = {{headerTitle: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;