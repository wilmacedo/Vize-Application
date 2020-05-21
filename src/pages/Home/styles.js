import styled from 'styled-components/native';
import color from '../../constants/color';

import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 20px 0px;
  background-color: ${color.background};
  padding-top: ${Platform.OS === 'android' ? 40 : 5}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${color.white};
  font-size: 26px;
  font-family: 'roboto-light';
`;

export const Notification = styled.View`
  margin-top: 15px;
  flex-direction: row;
  border-width: 1px;
  border-radius: 30px;
  align-items: center;
  padding: 5px 10px;
  border-color: ${color.semiDark};
`;

export const Description = styled.Text`
  color: ${color.darkWhite};
  padding-left: 10px;
  flex: 1;
`;

export const Scroll = styled.ScrollView`
  border-radius: 15px;
`;