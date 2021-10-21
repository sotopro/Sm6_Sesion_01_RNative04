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

const Logo = require('./src/assets/images/react-native-logo.png');
const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');

  const onPressTitle = () => {
    setCount(count + 1);
  };
  const onChangeText = (type, value ) => {
    if(type === 'email'){
      setEmail(value);
    }else{
      setCellphone(value);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
      {/* <View style={styles.block1} /> */}
      {/* <View style={styles.block2} /> */}
      <Image
        style={styles.image}
        // source={Logo}
        source={{
          uri: 'https://c.tenor.com/nwbxEGQINOsAAAAd/pet-dog.gif',
        }}
        // source={{
        //   uri: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80',
        // }}
        // loadingIndicatorSource={{
        //   uri: 'https://c.tenor.com/nwbxEGQINOsAAAAd/pet-dog.gif',
        // }}
      />
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
        onChangeText={(value) => onChangeText('email', value)}
        value={email}
        placeholder="Your email"
        keyboardType="email-address"
        autoComplete="email"
        autoCorrect={false}
        textContentType="emailAddress"
        clearTextOnFocus={true}
        spellCheck={true}
        returnKeyType="done"
      />
      <TextInput
        style={styles.input}
        onChangeText={ (value) => onChangeText('cellphone', value)}
        value={cellphone}
        placeholder="Your phone number"
        keyboardType="phone-pad"
        autoComplete="tel"
        autoCorrect={false}
        textContentType="telephoneNumber"
        clearTextOnFocus={true}
        spellCheck={false}
      />
      </View>
      <ScrollView>
      <Text style={styles.paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </ScrollView>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 8,
  },
  paragraph: {
    fontSize: 30,
  }
});

export default App;
