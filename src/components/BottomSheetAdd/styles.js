import styled from 'styled-components/native';

import { color } from '../../utils/general';

const BoxSize = 80;

export const HeaderContainer = styled.View`
  background-color: white;
  padding-top: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  align-items: center;
`;

export const HeaderHandle = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  width: 60px;
  height: 4px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Container = styled.View`
  background-color: white;
  padding: 0 30px;
  height: 600px;
`;

export const AddContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AddIcon = styled.TouchableOpacity`
  height: ${BoxSize}px;
  width: ${BoxSize}px;
  background-color: rgba(75, 144, 226, 0.3);
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;

export const AddTitle = styled.Text`
  font-family: 'roboto-bold';
  font-size: 20px;
  color: ${color.textHighlight};
`;

export const RoomContainer = styled.View`
  margin-top: 30px;
`;

export const RoomImage = styled.Image.attrs(props => ({

}))`
  height: ${BoxSize}px;
  width: ${BoxSize}px;
`;

export const RoomText = styled.Text`
  
`;

export const RoomDescription = styled.Text`
`;