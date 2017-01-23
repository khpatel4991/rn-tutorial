import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import { regionChanged } from '../actions';

class MapHavenView extends Component {

    componentWillMount() {
        const positionOption = { timeout: 500, enableHighAccuracy: true };
        const gpsSuccess = currentPosition => {
            //use gps position
            console.log(currentPosition.coords.latitude);
            console.log(currentPosition.coords.longitude);
            // this.setState({
            //     latitude: currentPosition.coords.latitude,
            //     longitude: currentPosition.coords.longitude
            // });
        };
        const gpsFailed = () => {
            //use some 3rd party position solution(get position by your device ip)
            console.log('Error');
        };
        navigator.geolocation.getCurrentPosition(gpsSuccess, gpsFailed, positionOption);
    }

    onRegionChangeComplete(ar) {
        this.props.regionChanged(ar);
    }

    render() {
		return (
            <View style={{ flex: 1 }}>
				<Text>Long: {this.props.region.longitude}</Text>
				<Text>Lat: {this.props.region.latitude}</Text>
                <MapView
                    loadingEnabled
                    style={styles.map}
                    region={this.props.region}
                    onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                />
            </View>
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
    top: 100,
    left: 0,
    right: 0,
    bottom: 50,
  },
});

const mapStateToProps = ({ maps }) => ({
	region: maps.region
});

export default connect(mapStateToProps, { regionChanged })(MapHavenView);
