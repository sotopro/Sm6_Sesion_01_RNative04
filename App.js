/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Location from './src/scenes/location';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/scenes/home';

const sliders = [
  {
    id: 1,
    title: 'Cool Dogs',
    image:
      'https://images.unsplash.com/photo-1541876176131-3f5e84a7331a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80',
  },
  {
    id: 2,
    title: 'Nice Dogs',
    image:
      'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    title: 'Nau Dogs',
    image:
      'https://images.unsplash.com/photo-1583336663277-620dc1996580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80',
  },
];

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Location"
          options={({route}) => ({
            title: route.params.id,
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#ffffff',
            headerTitleStyle: {fontWeight: 'bold'},
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#212121"
              />
            ),
          })}>
          {props => <Location {...props} extraData={sliders} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
