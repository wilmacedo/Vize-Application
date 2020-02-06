import React from 'react';
import { Plataform, StyleSheet, StatusBar, View } from 'react-native';
import * as Font from 'expo-font';

import color from './src/constants/color';
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
      <>
        <StatusBar barStyle="light-content" color={color.warning}/>
        <View style={style.bg}>
          <Home />
        </View>
      </>
    );
  }
}

const style = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#282A36',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  }
});
