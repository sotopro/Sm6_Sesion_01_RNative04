import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PaymentMethods = ({navigation}) => {
  console.warn({navigation});
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PaymentMethods</Text>
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

export default PaymentMethods;
