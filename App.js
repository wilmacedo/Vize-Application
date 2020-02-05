import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

import Home from './src/pages/Home';

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    })
  }

  render() {
    return (
      <Home />
    );
  }
}
