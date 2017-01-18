/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  View,
  AppRegistry,
  StyleSheet,
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText="Havens" />
    <AlbumList />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('havens', () => App);
