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
import SignUpContact from './screens/SignUpContact';
import SignUpSchool from './screens/SignUpSchool';
import SignUpCourse from './screens/SignUpCourse';
import SignUpSurveyIntro from './screens/SignUpSurveyIntro';
import SignUpSurvey from './screens/SignUpSurvey';
import UserDashboard from './screens/UserDashboard';
import FindPartner from './screens/FindPartner'
import FindStudyRoom from './screens/FindStudyRoom';
import PickStudyRoom from './screens/PickStudyRoom';
import Requests from './screens/Requests';
import Details from './screens/Details';
import UserReservations from './screens/UserReservations';
import store from './store/store';
import { Provider } from 'react-redux'
import SignUpEmail from './screens/SignUpEmail';
import Settings from './screens/Settings';
import ImageUpload from './screens/ImageUpload';
import Interests from './screens/Interests';
import Sessions from './screens/Sessions';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
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
            name="SignUpEmail" 
            component={SignUpEmail} 
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
          <Stack.Screen 
            name="SignUpSurveyIntro" 
            component={SignUpSurveyIntro} 
            options = {{headerTitle: () => null,
              headerRight: () => <SecondaryLogoBlack />,
              headerLeft: () => <BackBlack />}}
          />
          <Stack.Screen 
            name="SignUpSurvey" 
            component={SignUpSurvey} 
            options = {{headerTitle: () => null,
              headerLeft: () => <BackBlack />}}
          />
          <Stack.Screen 
            name="UserDashboard" 
            component={UserDashboard} 
            options = {{headerTitle: () => null}}
          />
          <Stack.Screen 
            name="FindPartner" 
            component={FindPartner} 
            options = {{headerTitle: () => null,
              headerRight: () => <SecondaryLogo />,
              headerLeft: () => <BackWhite />}}
          />
          <Stack.Screen 
            name="FindStudyRoom" 
            component={FindStudyRoom} 
            options = {{headerTitle: () => null}}
          />
          <Stack.Screen 
            name="PickStudyRoom" 
            component={PickStudyRoom} 
            options = {{headerTitle: () => null}}
          />
          <Stack.Screen 
            name="Requests" 
            component={Requests} 
            options = {{headerTitle: () => null,
            headerLeft: () => <BackBlack />}}
          />
          <Stack.Screen 
            name="Details" 
            component={Details} 
            options = {{headerTitle: () => null,
              headerRight: () => <SecondaryLogo />,
              headerLeft: () => <BackWhite />}}
          />
          <Stack.Screen
            name="UserReservations" 
            component={UserReservations} 
            options = {{headerTitle: () => null,
            headerLeft: () => <BackBlack />}}
          />
          <Stack.Screen
            name="Settings" 
            component={Settings} 
            options = {{headerTitle: () => null}}
          />
          <Stack.Screen 
            name="ImageUpload" 
            component={ImageUpload} 
            options = {{headerTitle: () => null}}
          />

           <Stack.Screen 
            name="Interests" 
            component={Interests} 
            options = {{headerTitle: () => null}}
          />
          <Stack.Screen 
            name="Sessions" 
            component={Sessions} 
            options = {{headerTitle: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;