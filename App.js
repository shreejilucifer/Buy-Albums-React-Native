// App.js - Place Code in Here for iOS

// Import a library to help create a component
// import React from 'react';
// import { Text, AppRegistry } from 'react-native';
//
// // Create a component
// const App = () => <Text> Some Text </Text>;
//
// // Render it to the device
// AppRegistry.registerComponent('albums', () => App);

/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
