import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from '../pages/Home';
import Room from '../pages/Room';
import Login from '../pages/Access/Login';
import Signup from '../pages/Access/Singup';

const pages = createStackNavigator(
  {
    Login,
    Home,
    Room,
    Signup,
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
    }
  }
);

export default createAppContainer(pages);