import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './auth-provider';
import {MainStackNavigator} from './main';
import {AuthStackNavigator} from './auth';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = props => {
  const {logout} = useContext(AuthContext);
  const navigation = useNavigation();
  const setLogout = async () => {
    try {
      const data = await logout();
      navigation.navigate('Login', {data});
    } catch (error) {
      console.warn(error);
    }
  };
  const {user} = props;
  const CustomDrawerContent = props => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem label="Logout" onPress={() => setLogout()} />
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer.Navigator
      initialRouteName={user ? 'Home' : 'AuthStackNavigator'}
      drawerContent={() => <CustomDrawerContent {...props} />}
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
