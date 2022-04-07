import React, {useState, useEffect, useRef} from 'react';
import AppLoading from 'expo-app-loading';
import cacheAssetsAsync from './assets/cacheAssetAsync';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/header';
import SecondaryLogo from './components/SecondaryLogo';
import SecondaryLogoBlack from './components/SecondaryLogoBlack';
import BackWhite from './components/BackWhite';
import BackBlack from './components/BackBlack';
import store from './store/store';
import { Provider } from 'react-redux';
import LoginHome from './screens/Login/LoginHome';
import LoginEmail from './screens/Login/LoginEmail';
import LoginMobile from './screens/Login/LoginMobile';
import SignUpMobilePin from './screens/SignUp/SignUpMobilePin';
import SignUpPersonal from './screens/SignUp/SignUpPersonal';
import SignUpBirth from './screens/SignUp/SignUpBirth';
import SignUpContact from './screens/SignUp/SignUpContact';
import SignUpSchool from  './screens/SignUp/SignUpSchool';
import SignUpCourse from './screens/SignUp/SignUpCourse';
import SignUpSurveyIntro from './screens/SignUp/SignUpSurveyIntro';
import SignUpSurvey from './screens/SignUp/SignUpSurvey';
import SignUpEmail from './screens/SignUp/SignUpEmail';
import SignUpInterest from './screens/SignUp/SignUpInterest';
import SignUpImageUpload from './screens/SignUp/SignUpImageUpload';
import UserDashboard from './screens/User/UserDashboard';
import UserRequests from './screens/User/UserRequests';
import UserFindPartner from './screens/User/UserFindPartner';
import UserReservations from './screens/User/UserReservations';
import UserSettings from './screens/User/UserSettings';
import UserCreateSession from './screens/User/UserCreateSession';
import UserChooseSession from './screens/User/UserChooseSession';
import UserPartnerDetails from './screens/User/UserPartnerDetails';
import UserReservationDetails from './screens/User/UserReservationDetails';
import UserAllReservations from './screens/User/UserAllReservations';
import UserFinishedSessions from './screens/User/UserFinishedSessions';
import UserFinishedSessionDetails from './screens/User/UserFinishedSessionDetails';
import UserReviewPartners from './screens/User/UserReviewPartners';
import UserSessionType from './screens/User/UserSessionType';
import UserInvitationDetails from './screens/User/UserInvitationDetails';
import Loading from './components/Loading';
import UserAnonPartnerDetails from './screens/User/UserAnonPartnerDetails';

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();  
  const [loading, setLoading] = useState(true)


  useEffect(async () => {
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    //caching assets
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/accept.png'),
          require('./assets/images/card-bg1.png'),
          require('./assets/images/card-bg2.png'),
          require('./assets/images/check-button.png'),
          require('./assets/images/home.png'),
          require('./assets/images/logo2.png'),
          require('./assets/images/logo-header1.png'),
          require('./assets/images/logout.png'),
          require('./assets/images/next.png'),
          require('./assets/images/remove.png'),
          require('./assets/images/people-fill.png'),
          require('./assets/images/room.png'),
          require('./assets/images/room-alt.png'),
          require('./assets/images/settings.png'),
          require('./assets/images/table.png'),
          require('./assets/images/user-plus.png'),
          require('./assets/images/wl-black.png'),
          require('./assets/images/wl-logo.png'),
          require('./assets/images/wl-logo2.png'),
          require('./assets/images/wl-white.png'),
        ],
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }

    //setting device for notif subscription
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  if (loading) {
    return(
      <Loading/>
    )
  } else {
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
              component={SignUpMobilePin} 
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
              name="UserFindPartner" 
              component={UserFindPartner} 
              options = {{headerTitle: () => null,
                headerRight: () => <SecondaryLogo />,
                headerLeft: () => <BackWhite />}}
            />
            <Stack.Screen 
              name="UserCreateSession" 
              component={UserCreateSession} 
              options = {{headerTitle: () => null,
                headerLeft: () => <BackWhite />}}
            />
            <Stack.Screen 
              name="UserRequests" 
              component={UserRequests} 
              options = {{headerTitle: () => null,
              headerLeft: () => <BackBlack />}}
            />
            <Stack.Screen 
              name="UserPartnerDetails" 
              component={UserPartnerDetails} 
              options = {{headerTitle: () => null,
                headerRight: () => <SecondaryLogo />,
                headerLeft: () => <BackWhite />}}
            />
            <Stack.Screen 
              name="UserReviewPartners" 
              component={UserReviewPartners} 
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
              name="UserSettings" 
              component={UserSettings} 
              options = {{headerTitle: () => null}}
            />
            <Stack.Screen 
              name="SignUpImageUpload" 
              component={SignUpImageUpload} 
              options = {{headerTitle: () => null}}
            />
  
             <Stack.Screen 
              name="SignUpInterests" 
              component={SignUpInterest} 
              options = {{headerTitle: () => null}}
            />
            <Stack.Screen 
              name="UserChooseSession" 
              component={UserChooseSession} 
              options = {{headerTitle: () => null}}
            />
            <Stack.Screen
              name="UserAllReservations"
              component={UserAllReservations}
              options = {{headerTitle: () => null,
                headerLeft: () => <BackBlack />}}
            />
            <Stack.Screen
              name="UserFinishedSessions"
              component={UserFinishedSessions}
              options = {{headerTitle: () => null,
                headerLeft: () => <BackBlack />}}
            />
            <Stack.Screen 
              name="UserReservationDetails" 
              component={UserReservationDetails} 
              options = {{headerTitle: () => null}}
            />
            <Stack.Screen 
              name="UserFinishedSessionDetails" 
              component={UserFinishedSessionDetails} 
              options = {{headerTitle: () => null}}
            />
            <Stack.Screen 
              name="UserSessionType" 
              component={UserSessionType} 
              options = {{headerTitle: () => null,
                headerRight: () => <SecondaryLogo />,
                headerLeft: () => <BackWhite />}}
            />
            <Stack.Screen 
              name="UserInvitationDetails" 
              component={UserInvitationDetails} 
              options = {{headerTitle: () => null}}
            />
             <Stack.Screen 
              name="UserAnonPartnerDetails" 
              component={UserAnonPartnerDetails} 
              options = {{headerTitle: () => null,
                headerRight: () => <SecondaryLogo />,
                headerLeft: () => <BackWhite />}}
            />
  
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  
    );
  }
}

