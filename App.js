import React, { useState } from 'react';

import { StatusBar } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navigation from './src/navigation';

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
      <StatusBar barStyle="light-content" />
      <Navigation />
    </>
  );
}
