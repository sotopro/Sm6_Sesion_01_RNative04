import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const ProductSliderItem = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={{uri: item.images[0].url}} style={styles.image} />
        <View style={styles.textView}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>{`$ ${item.price}`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    height: width / 4,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 25 : 8,
    left: 7,
  },
  image: {
    width: width / 4,
    height: height / 5.5,
    borderRadius: 10,
  },
  title: {
    color: '#212121',
    fontSize: 13,
    shadowColor: '#ffffff',
    textShadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    textShadowColor: '#ffffff',
    textAlign: 'center',
    textShadowOpacity: 1,
    textShadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 8,
  },
});

export default ProductSliderItem;
