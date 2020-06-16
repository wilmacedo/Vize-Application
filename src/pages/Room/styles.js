import styled from 'styled-components/native';

import { Dimensions, StyleSheet } from 'react-native';

import { color, isDarkMode } from '../../utils/general';

var bgColor, textColor;
var imagePercent = Platform.OS === 'ios' ? 0.55 : 0.6;

if (isDarkMode()) {
  bgColor = color.darkest;
  textColor = color.white;
} else {
  bgColor = color.lighitBackground;
  textColor = color.darkest;
}

export const Container = styled.View`
  background-color: ${bgColor};
  flex: 1;
`;

export const ImageContainer = styled.ImageBackground`
  padding-top: ${Platform.OS === 'ios' ? 0 : 20}px;
  height: ${Dimensions.get('window').height * imagePercent}px;
  background-color: black;
  border-bottom-left-radius: 40px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
`;

export const ImageStyle = StyleSheet.create({
  style: {
    borderBottomLeftRadius: 40,
    opacity: 0.5,
  }
});

export const SafeView = styled.SafeAreaView`
  margin: 0 30px 0 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSide = styled.View`
`;

export const RightSide = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 135 : 125}px;
  justify-content: center;
`;

export const Icon = styled.View`
  margin-top: 15px;
`;

export const Title = styled.Text`
  margin-top: 35px;
  color: ${color.white};
  font-size: 32px;
  font-family: 'roboto';
`;

export const Data = styled.View`
  margin-top: 30px;
`;

export const DataTitle = styled.Text`
  color: ${color.white};
  font-family: 'roboto-light';
  font-size: 18px;
`;

export const DataInfo = styled.Text`
  color: ${color.white};
  font-family: 'roboto-bold';
  font-size: 50px;
`;

export const ActionContainer = styled.View`
`;

export const ActionTitleContainer = styled.View`
  margin: 40px 30px 0 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionTitle = styled.Text`
  font-family: 'roboto-bold';
  color: ${textColor};
  font-size: 16px;
`;

export const ActionBox = styled.ScrollView`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height * 0.3}px;
  padding-left: 10px;
`;

export const ActionBoxStyle = StyleSheet.create({
  style: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
    paddingBottom: 10,
  }
});