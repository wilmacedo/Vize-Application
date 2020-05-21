import React, { Component } from 'react';

import { SafeAreaView, StatusBar, TouchableOpacity, Text } from 'react-native';
import { Container, Logo, Title, ButtonContainer, ButtonText, SingupContainer, SignupText } from './styles';

import color from '../../../constants/color';
var darkMode = require('../../../services/darkMode');

export default class Login extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    var barStyle, areaBackground, logoColor, titleColor;

    if (darkMode()) {
      barStyle = 'light-content';
      areaBackground = color.darkest;
      logoColor = color.white;
      titleColor = color.white;
    } else {
      barStyle = 'dark-content';
      areaBackground = color.white;
      logoColor = color.darkest;
      titleColor = color.darkest;
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: areaBackground }}>
        <StatusBar barStyle={barStyle} />
        <Container>
          <Logo style={{ borderColor: logoColor }} />

          <Title style={{ color: titleColor }}>A tecnologia</Title>
          <Title style={{ color: titleColor }}>em suas</Title>
          <Title style={{ color: titleColor }}>mãos</Title>

          <ButtonContainer
            onPress={() => this.props.navigation.navigate('Home')}>
            <ButtonText>Acessar</ButtonText>
          </ButtonContainer>

          <SingupContainer>
            <SignupText style={{ color: titleColor }}>Não possui uma conta? </SignupText>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signup')}>
              <SignupText style={{ fontWeight: 'bold', color: titleColor }}>Cadastre-se aqui</SignupText>
            </TouchableOpacity>
          </SingupContainer>

        </Container>
      </SafeAreaView>
    );
  }
}