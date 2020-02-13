import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from '../pages/Home';
import Room from '../pages/Room';

const pages = createStackNavigator(
  {
    Home,
    Room,
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
    }
  }
);

export default createAppContainer(pages);