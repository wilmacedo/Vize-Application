import React, { Component } from 'react';

import { SafeAreaView, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Container, Title, TitleText, Step, StepInformation, FirstContainer, ImageButton, ImageContainer, ImageText, FormContainer, ProcessButton, ProcessText } from './styles';
import { Feather, AntDesign } from '@expo/vector-icons';

import FormPath from '../../../components/FormPath';

import color from '../../../constants/color';

export default class Signup extends Component {
  state = {
    page: 1,
  }

  static navigationOptions = {
    headerShown: false,
  }

  darkMode = () => new Date().getHours() >= 18 ? true : false;

  renderStep = () => {
    let page = this.state.page;
    if (page === 1) {
      return (
        <FirstContainer>
          <ImageContainer>
            <ImageButton>
              <AntDesign name="link" size={24} color={color.darkWhite} />
            </ImageButton>
            <ImageText>Envie uma foto para seu perfil</ImageText>
          </ImageContainer>
          <FormContainer>
            <FormPath title={"Nome"} placeholder={"Wil Macedo"} />
          </FormContainer>
          <FormContainer>
            <FormPath title={"E-mail"} placeholder={"exemplo@gmail.com"} />
          </FormContainer>
          <ProcessButton onPress={() => this.setState({ page: 2 })}>
            <ProcessText>Próximo</ProcessText>
          </ProcessButton>
        </FirstContainer>
      );
    } else {
      return (
        <FirstContainer>
          <FormContainer>
            <FormPath title={"Nome"} placeholder={"Wil Macedo"} />
          </FormContainer>
          <FormContainer>
            <FormPath title={"E-mail"} placeholder={"exemplo@gmail.com"} />
          </FormContainer>
          <FormContainer>
            <FormPath title={"Código de acesso"} placeholder={"A1B-C2D-3E4"} />
          </FormContainer>
          <ProcessButton onPress={() => this.setState({ page: 1 })}>
            <ProcessText>Próximo</ProcessText>
          </ProcessButton>
        </FirstContainer>
      );
    }
  }

  render() {
    var iconColor, titleColor;

    if (this.darkMode()) {
      iconColor = color.white;
      titleColor = color.white;
    } else {
      iconColor = color.darkest;
      titleColor = color.darkest;
    }

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
        <SafeAreaView style={{ flex: 1, backgroundColor: color.darkest }}>
          <Container>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Feather name="arrow-left" size={18} color={iconColor} />
            </TouchableOpacity>

            <Title>
              <TitleText style={{ color: titleColor }}>Novo</TitleText>
              <Step>
                <TitleText style={{ color: titleColor }}>Usuário</TitleText>
                <StepInformation>
                  <Text style={{ fontSize: 18, fontFamily: 'roboto-bold', color: color.white }}>{this.state.page}
                    <Text style={{ color: color.darkWhite, fontFamily: 'roboto', fontSize: 12 }}> /</Text>
                    <Text style={{ color: color.white, fontFamily: 'roboto', fontSize: 12 }}> 2</Text>
                  </Text>
                  <Text style={{ color: color.white, fontFamily: 'roboto-bold', fontSize: 9 }}>ETAPAS</Text>
                </StepInformation>
              </Step>
            </Title>
            {this.renderStep()}
          </Container>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }

}