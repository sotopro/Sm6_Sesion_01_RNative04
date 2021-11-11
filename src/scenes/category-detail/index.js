import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import ProductSliderItem from '../../components/product-slider-item';

const CategoryDetail = ({navigation, route}) => {
  const {products} = route.params;

  const productDetail = item => {
    navigation.navigate('ProductDetail', {
      products: item,
      title: item.name,
    });
  };
  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
      <View style={styles.container}>
        {products.length > 0 ? (
          <FlatList
            data={products}
            keyExtractor={item => item.id}
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate="fast"
            numColumns={2}
            renderItem={item => {
              return (
                <ProductSliderItem
                  item={item.item}
                  onPress={() => productDetail(item.item)}
                />
              );
            }}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerSafeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 15,
  },
});

export default CategoryDetail;
