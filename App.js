/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import HomeSlider from './src/components/sliders/homeSlider';
import EmployeeList from './src/components/employee/employeeList';

const Logo = require('./src/assets/images/react-native-logo.png');

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
const App = () => {
  return (
    <View style={styles.container}>
      {/* <HomeSlider sliders={sliders} /> */}
      <EmployeeList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
