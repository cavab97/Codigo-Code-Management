import React from 'react';

import {ABOUT_ROUTE, HOME_ROUTE} from './Constants';
import HomeContainer from '../screens/Home/home.container';
import AboutContainer from '../screens/About/about.container';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function ProtectedRoutes() {
  return (
    <Stack.Navigator
      initialRouteName={HOME_ROUTE}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HOME_ROUTE} component={HomeContainer} />
      <Stack.Screen name={ABOUT_ROUTE} component={AboutContainer} />
    </Stack.Navigator>
  );
}

export default ProtectedRoutes;
