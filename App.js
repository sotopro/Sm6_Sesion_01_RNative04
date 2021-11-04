/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Location from './src/scenes/location';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/scenes/home';
import Settings from './src/scenes/settings';
import Details from './src/scenes/details';

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

const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Location" component={Location} />
      <SettingsStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="Details" component={Details} />
    </SettingsStack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen
          name="Settings"
          options={{tabBarBadge: 3}}
          component={SettingsStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
