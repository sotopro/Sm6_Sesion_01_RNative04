import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Carousel from '../../components/carousel';

const data = [
  {
    id: 1,
    name: 'Beach',
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    description: 'Grand Rapids, United States',
  },
  {
    id: 2,
    name: 'Greece',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1473&q=80',
    description: 'Corfu, Greece',
  },
  {
    id: 3,
    name: 'Canon',
    image:
      'https://images.unsplash.com/photo-1627483297929-37f416fec7cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    description: 'Canon, EOS 5D Mark III',
  },
  {
    id: 4,
    name: 'EOS6D',
    image:
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    description: 'Canon, EOS 6D',
  },
];

const Home = ({navigation}) => {
  console.warn({navigation});
  return (
    <SafeAreaView style={styles.container}>
      {data.length > 0 ? <Carousel data={data} /> : null}
    </SafeAreaView>
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

export default Home;
