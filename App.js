/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {DrawerStackNavigator} from './src/route/drawer';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerStackNavigator />
    </NavigationContainer>
  );
};

export default App;
