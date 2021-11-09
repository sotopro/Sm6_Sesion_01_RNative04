import React from 'react';
import {View, StyleSheet, FlatList, Animated, Dimensions} from 'react-native';
import CarouselItem from './carousel-item';

const {width} = Dimensions.get('window');

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Carousel = ({data}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  if (data && data.length > 0) {
    return (
      <View style={{flex: 1}}>
        <AnimatedFlatList
          style={{flex: 0.95}}
          data={data}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          horizontal
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {listener: event => console.warn(event), useNativeDriver: true},
          )}
        />
        <View style={styles.dotContainer}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return <Animated.View key={i} style={[styles.dots, {opacity}]} />;
          })}
        </View>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  dotContainer: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#212121',
    margin: 8,
  },
});
export default Carousel;
