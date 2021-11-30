import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Inputs from './components/Inputs';

export default function App() {
          const [mapRegion, setmapRegion] = useState({
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
          });
          const [location, setLocation] = useState(null);
          const [errorMsg, setErrorMsg] = useState(null);
          (async () => {
                    let { status } = await Location.requestForegroundPermissionsAsync();
                    if (status !== 'granted') {
                              setErrorMsg('Permission to access location was denied');
                              return;
                    }

                    let location = await Location.getCurrentPositionAsync({});
                    setLocation(location);
                    setmapRegion(location.coords)
          })();
          return (
                    <View style={styles.container}>
                              <Inputs mapRegion={mapRegion} />
                              <MapView style={styles.map} >
                                        <Marker coordinate={mapRegion} title='Ma position' />
                              </MapView>
                              <StatusBar style="auto" />
                    </View>
          );
}

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
          },
          map: {
                    width: Dimensions.get('window').width / 1.1,
                    height: Dimensions.get('window').height / 2,
          },
});
