import React, { Component } from 'react';

import { SafeAreaView, View, Button, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Title, Notification, Description, Scroll } from './styles';

import HomeCard from '../../components/HomeCard';

import color from '../../constants/color';

export default class Home extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const { navigation } = this.props;
    var notificationColor = color.warning;

    var date = new Date();
    var time;
    if (date.getHours() > 0 && date.getHours() <= 12) {
      time = "Bom dia";
    } else if (date.getHours() > 12 && date.getHours() < 18) {
      time = "Boa tarde";
    } else {
      time = "Boa noite";
    }

    return (
      <View style={{ flex: 1, backgroundColor: color.background }}>
        <StatusBar barStyle='light-content' />
        <SafeAreaView style={{ flex: 1 }}>
          <Container>
            <Header>
              <Title>{time}, Wilson</Title>
              <TouchableOpacity>
                <Ionicons name="ios-apps" size={30} color={color.darkWhite} />
              </TouchableOpacity>
            </Header>
            <TouchableOpacity>
              <Notification>
                <Ionicons name="ios-flash" size={20} color={notificationColor} />
                <Description>2 Notificações pendentes</Description>
                <Ionicons name="ios-arrow-round-forward" size={25}
                  color={color.darkWhite} />
              </Notification>
            </TouchableOpacity>
            <Scroll showsHorizontalScrollIndicator={false}>
              <HomeCard navigation={navigation} />
            </Scroll>
          </Container>
        </SafeAreaView>
      </View>
    );
  }
}
