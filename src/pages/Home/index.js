import React, { Component } from 'react';

import { SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Title, Notification, Description } from './styles';

import HomeCard from '../../components/HomeCard';

import color from '../../constants/color';

export default class Home extends Component {
  render() {
    var notificationColor = color.warning;

    var time;
    if (new Date().getHours() < 18) {
      time = "Bom dia";
    } else {
      time = "Boa noite";
    }

    return (
      <SafeAreaView style={{ flex: 1, }}>
        <Container>
          <Header>
            <Title>{time}, Wilson</Title>
            <Ionicons name="ios-menu" size={30} color={color.darkWhite} />
          </Header>
          <Notification>
            <Ionicons name="ios-flash" size={20} color={color.warning} />
            <Description>2 Notificações pendentes</Description>
            <Ionicons name="ios-arrow-round-forward" size={25}
              color={{ color: notificationColor }} />
          </Notification>
          <HomeCard />
        </Container>
      </SafeAreaView>
    );
  }
}
