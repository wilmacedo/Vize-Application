import React, { Component } from 'react';

import { Container, Title, TextBox } from './styles';

import color from '../../constants/color';

export default class FormPath extends Component {
  state = {
    borderColor: color.light,
  }

  darkMode = () => new Date().getHours() >= 18 ? true : false;

  render() {
    var placeholderColor, titleColor;

    if (this.darkMode()) {
      placeholderColor = '#575b75';
      titleColor = color.white;
    }

    return (
      <Container style={{ borderBottomColor: this.state.borderColor }}>
        <Title style={{ color: titleColor }}>{this.props.title.toUpperCase()}</Title>
        <TextBox placeholder={this.props.placeholder} placeholderTextColor={placeholderColor}
          onFocus={() => this.setState({ borderColor: color.select })}
          onEndEditing={() => this.setState({ borderColor: color.light })} />
      </Container>
    );
  }
}