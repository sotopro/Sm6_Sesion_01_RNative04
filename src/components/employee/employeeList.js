import React, {useRef} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  Text,
  Animated,
} from 'react-native';
import faker from 'faker';

faker.seed(10);

const DATA = [...Array(25).keys()].map((_, i) => {
  return {
    key: faker.datatype.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const AVATAR_SIZE = 60;
const SPACING = 20;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3.35;

const EmployeeList = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1447875569765-2b3db822bec9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={40}
      />
      <StatusBar hidden />
      <Animated.FlatList
        data={DATA}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.flatList}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animated.View
              style={[styles.containerEmployeeList, {transform: [{scale}]}]}>
              <Image source={{uri: item.image}} style={styles.imageEmployee} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerEmployeeList: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    flexDirection: 'row',
    padding: SPACING,
    marginBottom: SPACING,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  flatList: {
    padding: SPACING,
    paddingTop: StatusBar.currentHeight || 42,
  },
  imageEmployee: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: SPACING,
    marginRight: SPACING,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  jobTitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  email: {
    fontSize: 12,
    opacity: 0.8,
    color: '#0099cc',
  },
});

export default EmployeeList;
