import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ProtectedRoutes from './ProtectedRoutes';
import {enableScreens} from 'react-native-screens';
import {navigationRef} from './NavigationService';

enableScreens();

function Navigators() {
  return (
    <NavigationContainer ref={navigationRef}>
      <ProtectedRoutes />
    </NavigationContainer>
  );
}

export default Navigators;
