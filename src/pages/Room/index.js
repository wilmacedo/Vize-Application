import React, { Component } from 'react';

import { Container } from './styles';

import { color, isDarkMode } from '../../utils/general';

export default class Room extends Component {

  render() {
    var prop = this.props.route.params.room;

    return (
      <Container>

      </Container>
    );
  }
}