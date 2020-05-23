import React from 'react';
import { StatusBar } from 'react-native';

export const color = {
  primary: '#6272A4',

  select: '#00bcd4',
  brightnessSelect: '#80f0ff',
  textHighlight: '#4b90e2',

  dark: '#48567D',
  semiDark: '#465170',
  darkest: '#404357',
  light: '#96A2C2',
  moreLight: '#eff1f6',

  warning: '#ff751a',
  success: '#00e600',

  background: '#282A36',
  white: '#FFF',
  darkWhite: '#bdbdbd',
}

export function isDarkMode() {
  let darkMode = new Date().getHours() >= 18 ? true : false;
  return darkMode;
}

export const profile = [
  {
    name: 'Wil Macedo', //MAX 14
    email: 'wil.macedo.sa@gmail.com',
    rooms: [
      {
        title: 'Quarto',
        image: require('../../assets/images/bedroom.jpg'),
      },
      {
        title: 'Sala',
        image: require('../../assets/images/living.jpg'),
      },
      {
        title: 'Cozinha',
        image: require('../../assets/images/kitchen.jpg'),
      },
    ]
  }
];