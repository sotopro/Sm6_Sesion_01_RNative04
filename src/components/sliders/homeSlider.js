/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
} from 'react-native';
import ItemHomeSlider from './itemHomeSlider';
const HomeSlider = props => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();
  const {sliders} = props;

  const itemSlider = () =>
    sliders &&
    sliders.map((item, imageIndex) => (
      <View style={{width: windowWidth, height: 250}} key={imageIndex}>
        <ItemHomeSlider image={item.image} title={item.title} />
      </View>
    ));

  return (
    <View style={styles.scrollContainer}>
      <ScrollView
        horizontal={true}
        style={styles.container}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {
            listener: (event, gestureState) =>
              console.warn(event, gestureState),
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={1}>
        {itemSlider()}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {sliders &&
          sliders.map((slider, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, {width}]}
              />
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorContainer: {
    position: 'relative',
    bottom: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#7D80DA',
    marginHorizontal: 4,
  },
});

export default HomeSlider;
