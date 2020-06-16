import styled from 'styled-components/native';

import { color } from '../../utils/general';

export const Container = styled.View`
  width: 140px;
  height: 135px;
  border-radius: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  align-items: center;
`;

export const Icon = styled.View`
  margin: 35px 0 0 0px;
`;

export const Status = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${color.darkest};
  opacity: 0.5;
  position: absolute;
  right: 0;
  margin: 15px 15px 0 0;
`;

export const Title = styled.Text`
  margin-top: 15px;
  font-family: 'roboto-bold';
  font-size: 16px;
  color: ${color.darkest};
`;
