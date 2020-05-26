import React, { Component } from 'react';

import { Container, Icon, Title } from './styles';
import { color, isDarkMode } from '../../utils/general';

export default class TabIcon extends Component {
  render() {
    var backgroundColor = isDarkMode() ? '#e2e3e9' : color.white;
    var marginLeft = this.props.inScrollView ? 20 : 0;
    if (this.props.firstScrollView) marginLeft += 10;
    var marginRight = this.props.lastScrollView ? 30 : 0;

    if (this.props.isSelected != null && !this.props.isSelected) {
      backgroundColor = 'rgba(226, 227, 233, 0.5)';
    }
    
    return (
      <Container style={{ backgroundColor, marginLeft, marginRight }}>
        <Icon>{this.props.icon}</Icon>
        <Title>{this.props.name}</Title>
      </Container>
    );
  }
}