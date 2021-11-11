import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Button from '../../components/core/button/index';

const { width, height } = Dimensions.get('window');

const ProductDetail = ({navigation, route}) => {
  const {products} = route.params;
  const {id, name, category, price, description, images} = products;
  const goToShoppingCart = () => {
    console.warn('Go to shopping cart');
  };
  console.warn({navigation});
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{category}</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Text>Slider</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <ScrollView>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{description}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{`$ ${price}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            variant="primary"
            label="Add to cart"
            onPress={() => goToShoppingCart()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    flex: 0.1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  sliderContainer: {
    flex: 0.5,
    width: width - 20,
  },
  content: {
    flex: 0.25,
  },
  titleContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  descriptionContainer: {
    marginHorizontal: 20,
  },
  description: {
    fontSize: 14,
    letterSpacing: 0.7,
  },
  footer: {
    flex: 0.15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alingItems: 'center',
  },
  priceContainer: {
    flex: 0.4,
    justifyContent: 'center',
    marginLeft: 20,
    height: 40,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonContainer: {
    flex: 0.6,
  },
});

export default ProductDetail;
