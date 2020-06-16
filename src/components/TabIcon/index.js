import React, { Component } from 'react';

import { Container, Icon, Title, Status } from './styles';
import { color, isDarkMode } from '../../utils/general';

export default class TabIcon extends Component {
  render() {
    var backgroundColor = isDarkMode() ? '#e2e3e9' : color.white;
    var statusColor = this.props.status ? '#00E600' : 'rgba(64, 67, 87, 0.5)';
    var marginLeft = this.props.inScrollView ? 20 : 0;
    if (this.props.firstScrollView) marginLeft += 10;
    var marginRight = this.props.lastScrollView ? 30 : 0;
    var fontSize = 16;

    if (this.props.name.length > 11 && this.props.name.length <= 15) {
      fontSize = 14;
    } else if (this.props.name.length > 15) {
      fontSize = 13;
    }

    return (
      <Container style={{ backgroundColor, marginLeft, marginRight }}>
        <Icon>{this.props.icon}</Icon>
        <Title style={{ fontSize }}>{this.props.name}</Title>
        <Status style={{ backgroundColor: statusColor }} />
      </Container>
    );
  }
}