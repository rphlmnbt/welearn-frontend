import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login'
import header from './components/header';
import Logo from './components/logo';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={header}
      >
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options = {{headerTitle: () => <Logo />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;