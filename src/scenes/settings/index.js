import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Settings = ({navigation}) => {
  console.warn({navigation});
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button
        color="#f194ff"
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home', {
            id: '1',
            routeName: 'Home',
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#212121',
  },
});

export default Settings;
