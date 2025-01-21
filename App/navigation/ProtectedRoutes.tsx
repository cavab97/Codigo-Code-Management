import React from 'react';
import {HOME_ROUTE, MOVIE_DETAILS_ROUTE} from './Constants';
import HomeContainer from '../screens/Home/home.container';
import MovieContainer from '../screens/MovieDetails/movie.container';
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
      <Stack.Screen name={MOVIE_DETAILS_ROUTE} component={MovieContainer} />
    </Stack.Navigator>
  );
}

export default ProtectedRoutes;
