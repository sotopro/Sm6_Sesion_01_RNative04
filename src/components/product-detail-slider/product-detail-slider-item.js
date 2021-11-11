import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const ProductDetailSliderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.url}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 40,
    height: height / 2.3,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  image: {
    width: width - 40,
    height: height / 2.3,
    borderRadius: 10,
    resizeMode: 'contain',
  },
});

export default ProductDetailSliderItem;
