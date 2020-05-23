import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

import { color, isDarkMode } from '../../utils/general';

var backgroundColor, textColor, userTextColor;

if (isDarkMode()) {
  backgroundColor = color.darkest;
  textColor = color.moreLight;
  userTextColor = color.brightnessSelect;
} else {
  backgroundColor = '#f2f2f2';
  textColor = color.darkest;
  userTextColor = color.textHighlight;
}

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${backgroundColor};
`;

export const Container = styled.View`
  margin: 25px 30px 0 30px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileContainer = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.3);
`;

export const ProfileImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;

export const TitleContainer = styled.View`
  margin-top: 60px;
`;

export const WelcomeText = styled.Text`
  font-family: 'roboto';
  font-size: 28px;
  color: ${textColor};
`;

export const UserText = styled.Text`
  margin-top: 5px;
  font-family: 'roboto-black';
  font-size: 32px;
  color: ${userTextColor};
`;

export const CardContainer = styled.View`
  margin-top: 30px;
`;

export const Title = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-family: 'roboto-black';
  color: ${textColor};
`;

export const CardItem = styled.View`
  border-radius: 15px;
`;

export const CardImage = styled.ImageBackground`
  height: 180px;
  width: ${Math.round(Dimensions.get('window').width * 0.84)}px;
  border-radius: 20px;
  justify-content: flex-start;
`;

export const CardText = styled.Text`
  position: absolute;
  bottom: 0;
  margin: 0 0 10px 15px;
  color: white;
  font-size: 20px;
  font-family: 'roboto-bold';
`;

export const QuickActionsContainer = styled.View`
  margin-top: 40px;
`;

export const Scroll = styled.ScrollView`
  margin: -15px -30px 0 -30px;
  padding: 15px 0 15px 0;
`;
