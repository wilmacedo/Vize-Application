import styled from 'styled-components/native';

import { color, isDarkMode } from '../../utils/general';

var bgColor;

if (isDarkMode()) {
  bgColor = color.darkest;
} else {
  bgColor = '#f2f2f2';
}


export const Container = styled.View`
  background-color: ${bgColor};
`;
