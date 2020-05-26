import React, { Component } from 'react';

import { Container, Title, TextBox } from './styles';

import { color, isDarkMode } from '../../utils/general';

export default class FormPath extends Component {
  state = {
    borderColor: color.light,
  }

  render() {
    var placeholderColor, titleColor, textColor;

    if (isDarkMode()) {
      placeholderColor = '#575b75';
      titleColor = color.white;
      textColor = color.white;
    } else {
      titleColor = color.darkest;
      placeholderColor = '#ced4e3';
      textColor = color.darkest;
    }

    return (
      <Container style={{ borderBottomColor: this.state.borderColor }}>
        <Title style={{ color: titleColor }}>{this.props.title.toUpperCase()}</Title>
        <TextBox style={{ color: textColor }} 
          placeholder={this.props.placeholder} 
          placeholderTextColor={placeholderColor} 
          keyboardType={this.props.keyboardType} 
          secureTextEntry={this.props.isPassword}
          autoCorrect={false}
          onFocus={() => this.setState({ borderColor: color.select })}
          onEndEditing={() => this.setState({ borderColor: color.light })} />
      </Container>
    );
  }
}