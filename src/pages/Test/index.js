import React, { Component } from 'react';

import {
  SafeAreaView,
} from 'react-native';

import Switch from '../../components/Switch';

import { color } from '../../utils/general';

export default class Test extends Component {

  render() {
    return (
      <SafeAreaView
        style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: color.darkest }}
      >
        <Switch 
          height={200}
          width={100}
          value={true}
        />
      </SafeAreaView>
    );
  }
}