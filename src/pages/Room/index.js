import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native';

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

import { Feather, FontAwesome5 } from '@expo/vector-icons';

import { color } from '../../utils/general';

import BarStatus from '../../components/BarStatus';
import TabIcon from '../../components/TabIcon';
import Switch from 'react-native-customisable-switch';

export default class Room extends Component {

  state = {
    value: false,
    primarySelected: true,
    selected: null,
  };

  setSelected = (name) => {
    if (this.state.selected === null) {
      this.setState({ selected: name });
      return true;
    }
    return false;
  }

  renderItem = (room) => {

    return room.map(action => {
      <TabIcon name={action.name} icon={action.icon} size={32} color={color.darkest}
        isSelected={this.setSelected(action.name)}
      />
    });
  }

  render() {
    var prop = this.props.route.params.room;

    return (
      <Container>
        <ImageContainer source={prop.image} imageStyle={ImageStyle.style}>
          <SafeView>
            <LeftSide>
              <Icon>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Feather name='arrow-left' size={20} color={color.white} />
                </TouchableOpacity>
              </Icon>
              <Title>{prop.name}</Title>
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
                switchBorderColor={'black'}
                onChangeValue={() => this.setState({ value: !this.state.value })}
              />
            </RightSide>
          </SafeView>
        </ImageContainer>
        <ActionContainer>
          <ActionTitleContainer>
            <TouchableOpacity
              onPress={() => this.setState({ primarySelected: true })}
            >
              <ActionTitle style={{ opacity: this.state.primarySelected ? 1 : 0.7 }}>Controles</ActionTitle>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ primarySelected: false })}
            >
              <ActionTitle style={{ opacity: this.state.primarySelected ? 0.7 : 1 }}>Adicionais</ActionTitle>
            </TouchableOpacity>
          </ActionTitleContainer>
          <ActionBox contentContainerStyle={ActionBoxStyle.style} showsHorizontalScrollIndicator={false} horizontal={true}>
            {this.renderItem(prop.control)}
          </ActionBox>
        </ActionContainer>
      </Container>
    );
  }
}