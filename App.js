import React, { useState } from 'react';

import { Platform, StyleSheet, StatusBar, View } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import color from './src/constants/color';
import Home from './src/pages/Home';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <>
      <StatusBar barStyle="light-content" color={color.warning} />
      <View style={style.bg}>
        <Home />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#282A36',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  }
});
