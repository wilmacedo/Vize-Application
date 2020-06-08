import React, { Component } from 'react';

import { TouchableOpacity, View, Animated } from 'react-native';

export default class Switch extends Component {

  animatedSwitchValue = new Animated.Value(this.props.value ? 0 : 1);

  componentDidUpdate() {
    Animated.timing(this.animatedSwitchValue,
      {
        toValue: this.props.value ? 0 : 1,
        duration: 310,
        useNativeDriver: true,
      }).start();
  }

  handleSwitch = () => this.props.onChange != null ? this.props.onChange() : null;

  render() {
    var { width, height, value } = this.props;
    var backgroundColor = value ? 'rgba(75, 144, 226, 1)' : 'rgba(242, 242, 242, 0.5)';

    return (
      <TouchableOpacity
        onPress={this.handleSwitch}
      >
        <View style={{
          backgroundColor,
          width,
          height,
          borderRadius: 15,
          alignItems: 'center',
        }}>
          <Animated.View
            style={{
              height: height * .1,
              width: width - 10,
              borderRadius: 25,
              marginTop: 5,
              backgroundColor: 'white',
              transform: [
                {
                  translateY: this.animatedSwitchValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, height * 0.85],
                  })
                }
              ]
            }}
          />
        </View>
      </TouchableOpacity>
    );

  }
}