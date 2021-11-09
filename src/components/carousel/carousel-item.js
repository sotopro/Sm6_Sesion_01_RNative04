import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const CarouselItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.textView}>
        <Text style={styles.title}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: width - 20,
    height: height / 4,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: width - 20,
    height: height / 4,
    borderRadius: 10,
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
});

export default CarouselItem;
