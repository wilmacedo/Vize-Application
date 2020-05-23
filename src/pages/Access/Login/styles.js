import styled from 'styled-components/native';

import { color } from '../../../utils/general';

export const Container = styled.View`
  flex: 1;
  padding: 40px 50px 0px 50px;
`;

export const Logo = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border-width: 8px;
  border-color: ${color.darkest};
  margin-bottom: 120px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: 'roboto-bold';
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin: 0px 0px 90px 0px;
  min-height: 60px;
  min-width: 240px;
  border-radius: 27px;
  background-color: ${color.select};
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  left: 25%;
  box-shadow: 2px 5px 10px rgba(0, 189, 212, 0.5);
`;

export const ButtonText = styled.Text`
  font-size: 26px;
  font-family: 'roboto';
  color: ${color.white};
`;

export const SingupContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 25%;
  flex-direction: row;
  margin: 0 0 50px 10px;
`;

export const SignupText = styled.Text`
  font-size: 11px;
`;