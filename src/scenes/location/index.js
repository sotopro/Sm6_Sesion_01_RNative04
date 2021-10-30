import React, {useState, useEffect, useRef, useCallback} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  PermissionsAndroid,
  Linking,
  Alert,
  ToastAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import VIForegroundService from '@voximplant/react-native-foreground-service';

const {width, height} = Dimensions.get('window');
const Location = () => {
  const [dark, setDark] = useState(false);
  const [location, setLocation] = useState();
  const [foregroundService, setForegroundService] = useState(true);
  const [observing, setObserving] = useState(false);
  const watchId = useRef();

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    return () => {
      removeLocationUpdates();
    };
  }, [removeLocationUpdates]);

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('unable to open setting');
      });
    };

    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(
        'Turn on Location Services to allow AwesomeProject to determinar you location',
        '',
        [
          {text: 'Go to Settings', onPress: () => openSetting()},
          {text: "Don't Use Location", onPress: () => {}},
        ],
      );
    }

    return false;
  };

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      console.warn('!hasPermission', hasPermission);
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position.coords);
        console.warn({position});
      },
      error => {
        Alert.alert(`Code: ${error.code}`, error.message);
        setLocation(null);
        console.warn(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
      },
    );
  };

  const getLocationUpdates = async value => {
    console.warn(value);
    if (value) {
      const hasPermission = await hasLocationPermission();
      if (!hasPermission) {
        return;
      }

      if (Platform.OS === 'android' && foregroundService) {
        try {
          await startForegroundService();
        } catch (e) {
          console.error(e);
        }
      }
      setObserving(true);

      watchId.current = Geolocation.watchPosition(
        position => {
          setLocation(position.coords);
          console.warn('watchId', position);
        },
        error => {
          setLocation(null), console.warn(error);
        },
        {
          accuracy: {
            android: 'high',
            ios: 'best',
          },
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000,
        },
      );
    } else {
      removeLocationUpdates();
    }
  };

  const startForegroundService = async () => {
    if (Platform.Version >= 26) {
      await VIForegroundService.createNotificationChannel({
        id: 'locationChannel',
        name: 'Location Tracking Channel',
        description: 'Tracks location of user',
        enableVibration: false,
      });
    }

    return VIForegroundService.startService({
      channelId: 'locationChannel',
      id: 420,
      title: 'AwesomeProject',
      text: 'Tracking location updates',
      icon: 'ic_launcher',
    });
  };

  const removeLocationUpdates = useCallback(() => {
    if (watchId.current !== null) {
      stopForegroundService();
      Geolocation.clearWatch(watchId.current);
      watchId.current = null;
      setObserving(false);
    }
  }, [stopForegroundService]);

  const stopForegroundService = useCallback(() => {
    VIForegroundService.stopService().catch(err => err);
  }, []);

  return (
    <>
      {location && (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            customMapStyle={dark ? mapStyle : []}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="My Location"
              description="this is a marker description"
            />
          </MapView>
          <TouchableOpacity
            onPress={() => setDark(!dark)}
            style={styles.button}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => getLocationUpdates(!observing)}
            style={styles.buttonStartLocation}>
            <Text style={styles.buttonText}>
              {observing ? 'Stop' : 'Start'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: width,
    height: height,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: 30,
    borderRadius: 15,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    top: 40,
    marginTop: 5,
    alignSelf: 'flex-end',
    right: 20,
  },
  buttonStartLocation: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: 30,
    borderRadius: 15,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    top: 80,
    marginTop: 5,
    alignSelf: 'flex-end',
    right: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  },
});

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'geometry.fill',
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.business',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2C2C2C',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8A8A8A',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
];

export default Location;
