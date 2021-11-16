import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro from '../scenes/intro/index';
import Login from '../scenes/login/index';
import Register from '../scenes/register/index';
import {MainStackNavigator} from './main';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = props => {
  const forFade = ({current, closing}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      headerMode="none"
      gestureEnabled={false}
      screenOptions={{
        cardStyleInterpolator: forFade,
        headerShown: false,
      }}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MainStackNavigator" component={MainStackNavigator} />
    </Stack.Navigator>
  );
};

export {AuthStackNavigator};
