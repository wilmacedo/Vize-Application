import React from 'react';

import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Text
} from 'react-native';

import { color } from '../../utils/general';
import BottomSheetAdd from '../../components/BottomSheetAdd';
import Animated from 'react-native-reanimated';

export default class Test extends React.Component {

  bs = React.createRef();
  fall = new Animated.Value(1);

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <BottomSheetAdd
          reference={this.bs}
          snapPoints={[500, 200, 0]}
          callback={this.fall}
          initialSnap={2}
        />
        <Animated.View
          style={{
            opacity: Animated.add(0.4, Animated.multiply(this.fall, 0.9)),
          }}
        >
          <TouchableWithoutFeedback onPress={() => {
            if (this.bs != null) this.bs.current.snapTo(1)
          }}>
            <View
              style={{
                backgroundColor: color.lighitBackground,
                width: '100%',
                height: '100%',
              }}
            />
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    )
  }
}