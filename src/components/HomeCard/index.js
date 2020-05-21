import React, { Component } from 'react';

import { ImageBackground, View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Container, Title, Info, IconRight, IconEnd, CircleButton, IconText } from './styles';
import { Ionicons } from '@expo/vector-icons';

import color from '../../constants/color';

export default class HomeCard extends Component {
  render() {
    const style = StyleSheet.create({
      platformPadding: {
        paddingTop: Platform.OS === 'ios' ? 3 : 0,
      }
    });

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.navigation.navigate('Room')
        }}>
        <ImageBackground
          source={require('../../../assets/images/bedroom.jpg')}
          style={{ marginTop: 25, height: 200 }}
          imageStyle={{ borderRadius: 15, resizeMode: 'cover', }}>
          <Container>
            <Title>Quarto</Title>
            <Info>
              <CircleButton onPress={() => {console.log("ola")}}>
                <Ionicons name="ios-sunny" size={25} color={color.white} style={style.platformPadding} />
              </CircleButton>
              <IconRight>
                <CircleButton>
                  <Ionicons name="ios-videocam" size={25} color={color.white} style={style.platformPadding} />
                </CircleButton>
              </IconRight>
              <View style={{ flex: 1, }} />
              <IconEnd>
                <Ionicons name="ios-thermometer" size={25} color={color.white} />
                <IconText>21°</IconText>
              </IconEnd>
            </Info>
          </Container>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}
