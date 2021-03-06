import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
  useScrollHandler,
  interpolateColor,
} from 'react-native-redash/lib/module/v1';
import Animated, {multiply, divide} from 'react-native-reanimated';
import Slide, {SLIDE_HEIGHT} from '../../components/slides/slide';
import Dots from '../../components/slides/dots';
import SubSlide from '../../components/slides/subslide';

const BORDER_RADIUS = 75;
const {width} = Dimensions.get('window');

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: '#BFEAF5',
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
  },
];

const Intro = ({navigation}) => {
  const scroll = useRef(null);
  const {scrollHandler, x} = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}>
          {slides.map(({title}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{title}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}>
          <View style={styles.footerContent}>
            <View style={styles.pagination}>
              {slides.map((_, index) => (
                <Dots
                  key={index}
                  currentIndex={divide(x, width)}
                  {...{index}}
                />
              ))}
            </View>
            <Animated.View
              style={[
                styles.subslider,
                {
                  width: width * slides.length,
                  transform: [{translateX: multiply(x, -1)}],
                },
              ]}>
              {slides.map(({subtitle, description}, index) => (
                <SubSlide
                  key={index}
                  last={index === slides.length - 1}
                  {...{subtitle, description}}
                  onPress={() => {
                    if (scroll.current) {
                      scroll.current.getNode().scrollTo({
                        x: width * (index + 1),
                        animated: true,
                      });
                    }
                    if (index === slides.length - 1) {
                      navigation.navigate('Login');
                    }
                  }}
                />
              ))}
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  subslider: {
    flex: 1,
    flexDirection: 'row',
  },
  footerContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Intro;
