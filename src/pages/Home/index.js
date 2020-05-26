import React, { Component } from 'react';

import { TouchableOpacity, TouchableWithoutFeedback, Dimensions, ScrollView } from 'react-native';
import {
  SafeAreaView,
  Container,
  TopContainer,
  ProfileContainer,
  ProfileImage,
  TitleContainer,
  WelcomeText,
  UserText,
  CardContainer,
  CardItem,
  CardText,
  CardImage,
  Title,
  TitleText,
  QuickActionsContainer,
  Scroll,
} from './styles';

import TabIcon from '../../components/TabIcon';
import BarStatus from '../../components/BarStatus';

import { Feather, Ionicons, MaterialCommunityIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';

import { color, profile, isDarkMode } from '../../utils/general';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);

export default class Home extends Component {

  _renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.navigation.navigate('Room', { room: item });
        }}
      >
        <CardItem>
          <CardImage source={item.image} imageStyle={{ borderRadius: 20 }}>
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.5)']}
              end={[0.5, 1.3]}
              style={{ flex: 1, borderRadius: 20 }}>
              <CardText>{item.name}</CardText>
            </LinearGradient>
          </CardImage>
        </CardItem>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    var iconColor = isDarkMode() ? color.moreLight : color.darkest;

    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BarStatus backgroundColor={color.lighitBackground} />
          <Container>
            <TopContainer>
              <TouchableOpacity>
                <Feather name="menu" size={26} color={iconColor} />
              </TouchableOpacity>

              <ProfileContainer>
                <ProfileImage source={require('../../../assets/images/perfil.jpg')} />
              </ProfileContainer>
            </TopContainer>
            <TitleContainer>
              <WelcomeText>Olá novamente,</WelcomeText>
              <UserText>{profile[0].name}</UserText>
            </TitleContainer>
            <CardContainer>
              <Title>
                <TitleText>Cômodos</TitleText>

                <TouchableOpacity>
                  <Ionicons name="ios-add-circle-outline" size={24} color={iconColor} />
                </TouchableOpacity>
              </Title>
              <Carousel
                ref={ref => this.carousel = ref}
                data={profile[0].rooms}
                renderItem={this._renderItem}
                sliderWidth={SLIDER_WIDTH}
                containerCustomStyle={{ marginLeft: -30 }}
                inactiveSlideScale={0.90}
                itemWidth={ITEM_WIDTH}
              />
            </CardContainer>
            <QuickActionsContainer>
              <Title>
                <TitleText>Ações rápidas</TitleText>

                <TouchableOpacity>
                  <Ionicons name="ios-add-circle-outline" size={24} color={iconColor} />
                </TouchableOpacity>
              </Title>

              <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity>
                  <TabIcon
                    icon={<MaterialCommunityIcons name="door" size={32} color={color.darkest} />}
                    name={'Portas'}
                    inScrollView={true}
                    firstScrollView={true} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <TabIcon
                    icon={<Entypo name="light-bulb" size={30} color={color.darkest} />}
                    name={'Luzes'}
                    inScrollView={true} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <TabIcon
                    icon={<FontAwesome5 name="temperature-low" size={24} color={color.darkest} />}
                    name={'Temperatura'}
                    inScrollView={true}
                    lastScrollView={true} />
                </TouchableOpacity>
              </Scroll>
            </QuickActionsContainer>
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  }
}