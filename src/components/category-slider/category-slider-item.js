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
const CategorySliderItem = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.textView}>
          <Text style={styles.title}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 3.5,
    height: Platform.OS === 'ios' ? height / 10 : height / 12,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  textView: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 25 : 8,
    left: 7,
  },
  image: {
    width: width / 3.5,
    height: height / 12,
    borderRadius: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.8,
      height: 0.8,
    },
    textAlign: 'center',
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
});

export default CategorySliderItem;
