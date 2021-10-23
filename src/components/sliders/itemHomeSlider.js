import React from 'react';
import {Text, ImageBackground, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const ItemHomeSlider = props => {
  const {image, title} = props;
  return (
    <ImageBackground source={{uri: image}} style={styles.containerSlider}>
      <Text style={styles.textSlider}>{title}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerSlider: {
    height: height * 0.2,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSlider: {
    fontSize: 20,
    padding: 15,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ItemHomeSlider;
