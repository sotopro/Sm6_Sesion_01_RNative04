/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, {useContext, useState, useEffect} from 'react';
import {DrawerStackNavigator} from './drawer';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './auth-provider';
import {Text} from 'react-native';
import auth from '@react-native-firebase/auth';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (loading) {
    return <Text>Loading..</Text>;
  }
  return (
    <NavigationContainer>
      <DrawerStackNavigator user={user} />
    </NavigationContainer>
  );
};

export default Routes;
