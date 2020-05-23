import styled from 'styled-components/native';

import { color } from '../../utils/general';

export const Container = styled.View`
  width: 140px;
  height: 135px;
  border-radius: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
`;

export const Icon = styled.View`
  margin: 20px 0 0 15px;
`;

export const Title = styled.Text`
  margin: 20px 0 20px 20px;
  font-family: 'roboto-bold';
  position: absolute;
  bottom: 0;
  font-size: 16px;
  color: ${color.darkest};
`;
