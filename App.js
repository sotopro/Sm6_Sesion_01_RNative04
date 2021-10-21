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
} from 'react-native';

const Logo = require('./src/assets/images/react-native-logo.png');
const App = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const onPressTitle = () => {
    setCount(count + 1);
  };
  const onChangeText = text => {
    setValue(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.block1} /> */}
      {/* <View style={styles.block2} /> */}
      {/* <Image
        style={styles.image}
        // source={Logo}
        // source={{
        //   uri: 'https://c.tenor.com/nwbxEGQINOsAAAAd/pet-dog.gif',
        // }}
        source={{
          uri: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80',
        }}
        loadingIndicatorSource={{
          uri: 'https://c.tenor.com/nwbxEGQINOsAAAAd/pet-dog.gif',
        }}
      /> */}
      <Text
        style={styles.title}
        // onPress={onPressTitle}
        allowFontScaling={true}
        // disabled={count > 0}
        numberOfLines={1}
        selectionColor={count > 0 ? 'green' : '#000000'}>
        {`My Cool App: pressed ${count}`}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder="Your Email"
        keyboardType="email-address"
        autoComplete="email"
        autoCorrect={false}
        clearButtonMode="always"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  block1: {
    backgroundColor: 'green',
    flex: 0.3,
  },
  block2: {
    backgroundColor: 'purple',
    flex: 0.7,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});

export default App;
