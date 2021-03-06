import React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const Slider = ({title, right}) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    color: '#212121',
    textAlign: 'center',
  },
});

export default Slider;
