import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

class MapHavenView extends Component {

    componentWillMount() {
        const positionOption = { timeout: 500, enableHighAccuracy: true };
        const gpsSuccess = currentPosition => {
            //use gps position
            console.log(currentPosition);
        };
        const gpsFailed = () => {
            //use some 3rd party position solution(get position by your device ip)
            console.log('Error');
        };
        navigator.geolocation.getCurrentPosition(gpsSuccess, gpsFailed, positionOption);
    }

    render() {
        return (
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.7825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default MapHavenView;
