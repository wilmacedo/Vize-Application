import React, { Component } from 'react';

import { TouchableOpacity, Platform } from 'react-native';

import {
  Container,
  ImageContainer,
  ImageStyle,
  SafeView,
  LeftSide,
  RightSide,
  Icon,
  Title,
  Data,
  DataTitle,
  DataInfo,
  ActionContainer,
  ActionTitleContainer,
  ActionTitle,
  ActionBox,
  ActionBoxStyle,
} from './styles';

import { Feather, Ionicons } from '@expo/vector-icons';

import { color, isDarkMode } from '../../utils/general';

import BarStatus from '../../components/BarStatus';
import TabIcon from '../../components/TabIcon';
import Switch from 'react-native-customisable-switch';

export default class Room extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: false,
      device: props.route.params.room.control[0],
    };
  }

  renderItem = (room) => {
    return room.map((action, i) => {
      var tab;
      if (room.length === i + 1) {
        tab = <TabIcon
          name={action.name}
          icon={action.icon}
          size={32}
          color={color.darkest}
          inScrollView={true}
          lastScrollView={true}
        />
      } else {
        tab = <TabIcon
          name={action.name}
          icon={action.icon}
          size={32}
          color={color.darkest}
          inScrollView={true}
        />
      }
      return (
        <TouchableOpacity key={action.name}
          onPress={() => {
            this.setState({ device: action })
          }}
        >
          {tab}
        </TouchableOpacity>
      );
    });
  };

  render() {
    var prop = this.props.route.params.room;
    var backgroundColor, styleBar;

    if (isDarkMode()) {
      backgroundColor = color.darkest;
      styleBar = 'light-content';
    } else {
      backgroundColor = color.white;
      styleBar = 'dark-content';
    }

    return (
      <Container>
        <BarStatus
          styleBar={Platform.OS === 'ios' ? 'light-content' : styleBar}
          backgroundColor={backgroundColor}
        />
        <ImageContainer
          source={prop.image}
          imageStyle={ImageStyle.style}
        >
          <SafeView>
            <LeftSide>
              <Icon>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Feather
                    name='arrow-left'
                    size={20}
                    color={color.white}
                  />
                </TouchableOpacity>
              </Icon>
              <Title>{prop.name}</Title>
              <Data>
                <DataTitle>Dispositivo</DataTitle>
                <DataInfo
                  style={{ fontSize: 15, fontFamily: 'roboto-bold' }}
                >
                  {this.state.device.name}
                </DataInfo>
              </Data>
              <Data>
                <DataTitle>Percentual de Uso</DataTitle>
                <DataInfo>{this.state.value ? 100 : 0}%</DataInfo>
              </Data>
            </LeftSide>
            <RightSide>
              <Switch
                switchWidth={200}
                switchHeight={100}
                buttonHeight={90}
                buttonWidth={20}
                inactiveBackgroundColor={'rgba(242, 242, 242, 0.5)'}
                activeBackgroundColor={'rgba(75, 144, 226, 1)'}
                onChangeValue={() => this.setState({ value: !this.state.value })}
              />
            </RightSide>
          </SafeView>
        </ImageContainer>
        <ActionContainer>
          <ActionTitleContainer>
            <ActionTitle>Dispositivos</ActionTitle>
            <TouchableOpacity>
              <Ionicons
                name="ios-add-circle-outline"
                size={24}
                color={color.darkest}
              />
            </TouchableOpacity>
          </ActionTitleContainer>
          <ActionBox
            contentContainerStyle={ActionBoxStyle.style}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            {this.renderItem(prop.control)}
          </ActionBox>
        </ActionContainer>
      </Container>
    );
  }
}