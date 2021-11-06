import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStackNavigator} from './main';
import {AuthStackNavigator} from './auth';

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = props => {
  return (
    <Drawer.Navigator
      initialRouteName="AuthStackNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="AuthStackNavigator"
        component={AuthStackNavigator}
        options={{
          swipeEdgeWidth: 0,
        }}
      />
      <Drawer.Screen name="Home" component={MainStackNavigator} />
    </Drawer.Navigator>
  );
};

export {DrawerStackNavigator};
