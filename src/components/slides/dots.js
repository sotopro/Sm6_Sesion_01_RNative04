/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';

const Dots = ({currentIndex, index}) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View style={[styles.dots, {opacity, transform: [{scale}]}]} />
  );
};

const styles = StyleSheet.create({
  dots: {
    backgroundColor: '2CB980',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4,
  },
});

export default Dots;
