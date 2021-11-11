import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  FlatList,
} from 'react-native';
import Carousel from '../../components/carousel';
import CategorySliderItem from '../../components/category-slider/category-slider-item';
import ProductSliderItem from '../../components/product-slider-item';
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

const categoryData = [
  {
    id: 1,
    name: 'Shoes',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1412&q=80',
    description: 'Shoes',
  },
  {
    id: 2,
    name: 'Bags',
    image:
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    description: 'Bags',
  },
  {
    id: 3,
    name: 'Accessories',
    image:
      'https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1482&q=80',
    description: 'Accessories',
  },
  {
    id: 4,
    name: 'T-Shirt',
    image:
      'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'T-Shirt',
  },
  {
    id: 5,
    name: 'Pants',
    image:
      'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1609&q=80',
    description: 'Pants',
  },
];

const productData = [
  {
    id: 1,
    name: 'CAMISA FLORAL',
    description:
      'CAMISA CONFECCIONADA EN TEJIDO CON ALTA ELASTICIDAD. CUELLO BOWLING Y MANGA CORTA. CIERRE FRONTAL DE BOTONADURA.',
    price: '149,00',
    category: 'T-Shirt',
    color: [
      {
        id: 1,
        name: 'Negro',
      },
      {
        id: 2,
        name: 'Azul',
      },
    ],
    images: [
      {
        id: 1,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_1_1_1.jpg?ts=1635233208516',
      },
      {
        id: 2,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_1_1.jpg?ts=1635233166585',
      },
      {
        id: 3,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_2_1.jpg?ts=1635233192886',
      },
      {
        id: 4,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_1_1.jpg?ts=1631865803266',
      },
      {
        id: 5,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_3_1.jpg?ts=1631865902077',
      },
    ],
  },
  {
    id: 1,
    name: 'CAMISA FLORAL',
    category: 'T-Shirt',
    description:
      'CAMISA CONFECCIONADA EN TEJIDO CON ALTA ELASTICIDAD. CUELLO BOWLING Y MANGA CORTA. CIERRE FRONTAL DE BOTONADURA.',
    price: '149,00',
    color: [
      {
        id: 1,
        name: 'Negro',
      },
      {
        id: 2,
        name: 'Azul',
      },
    ],
    images: [
      {
        id: 1,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_1_1_1.jpg?ts=1635233208516',
      },
      {
        id: 2,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_1_1.jpg?ts=1635233166585',
      },
      {
        id: 3,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_2_1.jpg?ts=1635233192886',
      },
      {
        id: 4,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_1_1.jpg?ts=1631865803266',
      },
      {
        id: 5,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_3_1.jpg?ts=1631865902077',
      },
    ],
  },
  {
    id: 1,
    name: 'CAMISA FLORAL',
    category: 'T-Shirt',
    description:
      'CAMISA CONFECCIONADA EN TEJIDO CON ALTA ELASTICIDAD. CUELLO BOWLING Y MANGA CORTA. CIERRE FRONTAL DE BOTONADURA.',
    price: '149,00',
    color: [
      {
        id: 1,
        name: 'Negro',
      },
      {
        id: 2,
        name: 'Azul',
      },
    ],
    images: [
      {
        id: 1,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_1_1_1.jpg?ts=1635233208516',
      },
      {
        id: 2,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_1_1.jpg?ts=1635233166585',
      },
      {
        id: 3,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_2_1.jpg?ts=1635233192886',
      },
      {
        id: 4,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_1_1.jpg?ts=1631865803266',
      },
      {
        id: 5,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_3_1.jpg?ts=1631865902077',
      },
    ],
  },
  {
    id: 1,
    name: 'CAMISA FLORAL',
    category: 'T-Shirt',
    description:
      'CAMISA CONFECCIONADA EN TEJIDO CON ALTA ELASTICIDAD. CUELLO BOWLING Y MANGA CORTA. CIERRE FRONTAL DE BOTONADURA.',
    price: '149,00',
    color: [
      {
        id: 1,
        name: 'Negro',
      },
      {
        id: 2,
        name: 'Azul',
      },
    ],
    images: [
      {
        id: 1,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_1_1_1.jpg?ts=1635233208516',
      },
      {
        id: 2,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_1_1.jpg?ts=1635233166585',
      },
      {
        id: 3,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_2_1.jpg?ts=1635233192886',
      },
      {
        id: 4,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_1_1.jpg?ts=1631865803266',
      },
      {
        id: 5,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_3_1.jpg?ts=1631865902077',
      },
    ],
  },
  {
    id: 1,
    name: 'CAMISA FLORAL',
    category: 'T-Shirt',
    description:
      'CAMISA CONFECCIONADA EN TEJIDO CON ALTA ELASTICIDAD. CUELLO BOWLING Y MANGA CORTA. CIERRE FRONTAL DE BOTONADURA.',
    price: '149,00',
    color: [
      {
        id: 1,
        name: 'Negro',
      },
      {
        id: 2,
        name: 'Azul',
      },
    ],
    images: [
      {
        id: 1,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_1_1_1.jpg?ts=1635233208516',
      },
      {
        id: 2,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_1_1.jpg?ts=1635233166585',
      },
      {
        id: 3,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_2_1.jpg?ts=1635233192886',
      },
      {
        id: 4,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_1_1.jpg?ts=1631865803266',
      },
      {
        id: 5,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_3_1.jpg?ts=1631865902077',
      },
    ],
  },
  {
    id: 1,
    name: 'CAMISA FLORAL',
    category: 'T-Shirt',
    description:
      'CAMISA CONFECCIONADA EN TEJIDO CON ALTA ELASTICIDAD. CUELLO BOWLING Y MANGA CORTA. CIERRE FRONTAL DE BOTONADURA.',
    price: '149,00',
    color: [
      {
        id: 1,
        name: 'Negro',
      },
      {
        id: 2,
        name: 'Azul',
      },
    ],
    images: [
      {
        id: 1,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_1_1_1.jpg?ts=1635233208516',
      },
      {
        id: 2,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_1_1.jpg?ts=1635233166585',
      },
      {
        id: 3,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_2_1.jpg?ts=1635233192886',
      },
      {
        id: 4,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_1_1.jpg?ts=1631865803266',
      },
      {
        id: 5,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_3_1.jpg?ts=1631865902077',
      },
    ],
  },
  {
    id: 1,
    name: 'CAMISA FLORAL',
    category: 'T-Shirt',
    description:
      'CAMISA CONFECCIONADA EN TEJIDO CON ALTA ELASTICIDAD. CUELLO BOWLING Y MANGA CORTA. CIERRE FRONTAL DE BOTONADURA.',
    price: '149,00',
    color: [
      {
        id: 1,
        name: 'Negro',
      },
      {
        id: 2,
        name: 'Azul',
      },
    ],
    images: [
      {
        id: 1,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_1_1_1.jpg?ts=1635233208516',
      },
      {
        id: 2,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_1_1.jpg?ts=1635233166585',
      },
      {
        id: 3,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_2_1.jpg?ts=1635233192886',
      },
      {
        id: 4,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_1_1.jpg?ts=1631865803266',
      },
      {
        id: 5,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_3_1.jpg?ts=1631865902077',
      },
    ],
  },
  {
    id: 1,
    name: 'CAMISA FLORAL',
    category: 'T-Shirt',
    description:
      'CAMISA CONFECCIONADA EN TEJIDO CON ALTA ELASTICIDAD. CUELLO BOWLING Y MANGA CORTA. CIERRE FRONTAL DE BOTONADURA.',
    price: '149,00',
    color: [
      {
        id: 1,
        name: 'Negro',
      },
      {
        id: 2,
        name: 'Azul',
      },
    ],
    images: [
      {
        id: 1,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_1_1_1.jpg?ts=1635233208516',
      },
      {
        id: 2,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_1_1.jpg?ts=1635233166585',
      },
      {
        id: 3,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_2_1.jpg?ts=1635233192886',
      },
      {
        id: 4,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_1_1.jpg?ts=1631865803266',
      },
      {
        id: 5,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_3_1.jpg?ts=1631865902077',
      },
    ],
  },
  {
    id: 1,
    name: 'CAMISA FLORAL',
    category: 'T-Shirt',
    description:
      'CAMISA CONFECCIONADA EN TEJIDO CON ALTA ELASTICIDAD. CUELLO BOWLING Y MANGA CORTA. CIERRE FRONTAL DE BOTONADURA.',
    price: '149,00',
    color: [
      {
        id: 1,
        name: 'Negro',
      },
      {
        id: 2,
        name: 'Azul',
      },
    ],
    images: [
      {
        id: 1,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_1_1_1.jpg?ts=1635233208516',
      },
      {
        id: 2,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_1_1.jpg?ts=1635233166585',
      },
      {
        id: 3,
        url: 'https://static.zara.net/photos///2021/S/0/2/p/7545/433/800/2/w/850/7545433800_2_2_1.jpg?ts=1635233192886',
      },
      {
        id: 4,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_1_1.jpg?ts=1631865803266',
      },
      {
        id: 5,
        url: 'https://static.zara.net/photos///2021/I/0/2/p/7545/433/800/2/w/850/7545433800_6_3_1.jpg?ts=1631865902077',
      },
    ],
  },
];

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Home = ({navigation}) => {
  const scrollXCategories = new Animated.Value(0);
  const scrollXProducts = new Animated.Value(0);
  const categoryDetail = item => {
    const productCategory = productData.filter(
      product => product.category === item.name,
    );
    navigation.navigate('CategoryDetail', {
      products: productCategory,
      title: item.name,
    });
  };
  
  const productDetail = item => {
    navigation.navigate('ProductDetail', {
      products: item,
      title: item.name,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      {data.length > 0 ? (
        <View style={styles.defaultContainer}>
          <Carousel data={data} />
        </View>
      ) : null}
      {productData.length > 0 ? (
        <View style={styles.defaultContainer}>
          <Text style={styles.title}>Top Products</Text>
          <AnimatedFlatList
            data={productData}
            keyExtractor={item => item.id.toString()}
            horizontal
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            renderItem={item => {
              return (
                <ProductSliderItem
                  item={item.item}
                  onPress={() => productDetail(item.item)}
                />
              );
            }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollXProducts,
                    },
                  },
                },
              ],
              {listener: event => console.warn(event), useNativeDriver: true},
            )}
          />
        </View>
      ) : null}
      {categoryData.length > 0 ? (
        <View style={styles.defaultContainer}>
          <Text style={styles.title}>Categories</Text>
          <AnimatedFlatList
            data={categoryData}
            keyExtractor={item => item.id.toString()}
            horizontal
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            renderItem={item => {
              return (
                <CategorySliderItem
                  item={item.item}
                  onPress={() => categoryDetail(item.item)}
                />
              );
            }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollXCategories,
                    },
                  },
                },
              ],
              {listener: event => console.warn(event), useNativeDriver: true},
            )}
          />
        </View>
      ) : null}
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
    marginHorizontal: 10,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  defaultContainer: {
    flex: 1,
  },
});

export default Home;
