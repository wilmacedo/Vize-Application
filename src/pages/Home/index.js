import React, { Component } from 'react';

import { View, TouchableOpacity, TouchableWithoutFeedback, Dimensions, ScrollView } from 'react-native';
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
import BottomSheetAdd from '../../components/BottomSheetAdd';
import { color, profile, isDarkMode } from '../../utils/general';

import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import Animated from 'react-native-reanimated';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);

export default class Home extends Component {

  state = {
    canClick: true,
  }

  reference = React.createRef();
  opacity = new Animated.Value(1);

  _renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          if (this.state.canClick) this.props.navigation.navigate('Room', { room: item });
        }}
        disabled={!this.state.canClick}
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
      <View
        style={{ flex: 1, backgroundColor: 'black' }}
      >
        <BottomSheetAdd
          reference={this.reference}
          snapPoints={[500, 200, 0]}
          callback={this.opacity}
          onOpenStart={() => this.setState({ canClick: false })}
          onCloseEnd={() => this.setState({ canClick: true })}
          initialSnap={2}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            if (!this.state.canClick) this.reference.current.snapTo(2)
          }}
        >
          <Animated.View
            style={{
              flex: 1,
              opacity: Animated.add(0.3, Animated.multiply(this.opacity, 0.9)),
            }}
          >
            <SafeAreaView>
              <ScrollView showsVerticalScrollIndicator={false}>
                <BarStatus backgroundColor={color.lighitBackground} />
                <Container>
                  <TopContainer>
                    <TouchableOpacity
                      disabled={!this.state.canClick}
                    >
                      <Feather name="menu" size={26} color={iconColor} />
                    </TouchableOpacity>

                    <ProfileContainer
                      onPress={() => { if (this.state.canClick) this.props.navigation.navigate('Test') }}
                      disabled={!this.state.canClick}
                    >
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

                      <TouchableOpacity
                        onPress={() => {
                          if (this.reference != null) this.reference.current.snapTo(1);
                        }}
                        disabled={!this.state.canClick}
                      >
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
                          icon={<FontAwesome5 name="door-open" size={35} color={color.darkest} />}
                          name={'Portas'}
                          inScrollView={true}
                          firstScrollView={true}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <TabIcon
                          icon={<FontAwesome5 name="lightbulb" size={35} color={color.darkest} />}
                          name={'Luzes'}
                          inScrollView={true}
                          status={true}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <TabIcon
                          icon={<FontAwesome5 name="temperature-low" size={35} color={color.darkest} />}
                          name={'Temperatura'}
                          inScrollView={true}
                          lastScrollView={true}
                        />
                      </TouchableOpacity>
                    </Scroll>
                  </QuickActionsContainer>
                </Container>
              </ScrollView>
            </SafeAreaView >
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}