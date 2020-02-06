import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(70, 81, 112, 0.6);
  border-radius: 15px;
  padding: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'roboto';
  font-size: 26px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 10px;
  padding-left: 20px;
`;

export const CircleButton = styled.TouchableOpacity`
  width: 31px;
  height: 31px;
  background-color: rgba(72, 86, 125, 0.6);
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const IconRight = styled.View`
  padding-left: 15px;
`;

export const IconEnd = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: -7px;
`;

export const IconText = styled.Text`
  color: #fff;
  padding-left: 8px;
`;