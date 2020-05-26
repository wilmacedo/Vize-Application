import React from 'react';

import { StatusBar } from 'react-native';

import { color, isDarkMode } from '../../utils/general';

const BarStatus = ({ styleBar, backgroundColor }) => {
  var barStyle, barBackground;
  
  if (isDarkMode()) {
    barStyle = 'light-content';
    barBackground = color.darkest;
  } else {
    barStyle = 'dark-content';
    barBackground = backgroundColor;
  }
  
  barStyle = styleBar != null ? styleBar : barStyle;

  return <StatusBar barStyle={barStyle} backgroundColor={barBackground} />;
};

export default BarStatus;