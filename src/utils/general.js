import React from 'react';

import { Entypo, FontAwesome5 } from '@expo/vector-icons';

export const debugMode = true;

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
  lighitBackground: '#f2f2f2',
  white: '#FFF',
  darkWhite: '#bdbdbd',
}

export function isDarkMode() {
  let darkMode = new Date().getHours() >= 18 ? true : false;
  return !darkMode;
}

export const profile = [
  {
    name: 'Wil Macedo', //MAX 14
    email: 'wil.macedo.sa@gmail.com',
    rooms: [
      {
        id: 1,
        name: 'Quarto',
        image: require('../../assets/images/bedroom.jpg'),
        control: [
          {
            name: 'Luz Meio', // MAX 16
            icon: <FontAwesome5 name="lightbulb" size={24} color={color.darkest} />,
          },
          {
            name: 'Ar Condicionado',
            icon: <FontAwesome5 name="temperature-low" size={24} color={color.darkest} />
          }
        ]
      },
      {
        id: 2,
        name: 'Sala',
        image: require('../../assets/images/living.jpg'),
        control: [
          {
            name: 'Luz Entrada',
            icon: <FontAwesome5 name="lightbulb" size={24} color={color.darkest} />,
          },
          {
            name: 'Luz Mesa',
            icon: <FontAwesome5 name="lightbulb" size={24} color={color.darkest} />,
          },
          {
            name: 'Ar Condicionado',
            icon: <FontAwesome5 name="temperature-low" size={24} color={color.darkest} />
          },
          {
            name: 'Televisão',
            icon: <FontAwesome5 name="tv" size={24} color={color.darkest} />
          },
        ]
      },
      {
        id: 3,
        name: 'Cozinha',
        image: require('../../assets/images/kitchen.jpg'),
        control: [
          {
            name: 'Luz Mesa',
            icon: <FontAwesome5 name="lightbulb" size={24} color={color.darkest} />,
          },
          {
            name: 'Microondas',
            icon: <FontAwesome5 name="temperature-low" size={24} color={color.darkest} />
          },
          {
            name: 'Gelagua',
            icon: <Entypo name="water" size={24} color={color.darkest} />
          }
        ]
      },
    ]
  }
];