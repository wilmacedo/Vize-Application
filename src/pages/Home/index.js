import React, { Component } from 'react';

import { SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

    var time;
    if (new Date().getHours() < 18) {
      time = "Bom dia";
    } else {
      time = "Boa noite";
    }

    return (
      <View style={{ flex: 1, backgroundColor: color.background }}>
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
              <HomeCard />
            </Scroll>
          </Container>
        </SafeAreaView>
      </View>
    );
  }
}
