import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import header from './components/header';
import Logo from './components/logo';
import SecondaryLogo from './components/secondaryLogo'
import LoginHome from './screens/LoginHome';
import LoginEmail from './screens/LoginEmail';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={header}
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
            headerRight: () => <SecondaryLogo />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;