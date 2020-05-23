import styled from 'styled-components/native';

import { color } from '../../utils/general';

export const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${color.white};
`;

export const Title = styled.Text`
  margin-bottom: 7px;
  font-family: 'roboto-bold';
  font-size: 12px;
`;

export const TextBox = styled.TextInput`
  margin-bottom: 5px;
  color: ${color.white};
`;
