import styled from 'styled-components/native';

import color from '../../../constants/color';

export const Container = styled.View`
  padding: 20px 50px 0 30px;
  background-color: ${color.darkest};
  flex: 1;
`;

export const Title = styled.View`
  margin-top: 50px;
`;

export const TitleText = styled.Text`
  font-size: 32px;
  font-family: 'roboto-bold';
`;

export const Step = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StepInformation = styled.View`
  align-items: center;
`;

export const FirstContainer = styled.View`
  margin: 25px 10px 0 10px;
`;

export const ImageContainer = styled.View`
flex-direction: row;
align-items: center;
`;

export const ImageButton = styled.TouchableOpacity`
  width: 75px;
  height: 75px;
  border-radius: 40px;
  border-color: ${color.white};
  border-width: 2px;
  align-items: center;
  justify-content: center;
`;

export const ImageText = styled.Text`
  margin-left: 10px;
  color: ${color.darkWhite};
`;

export const FormContainer = styled.View`
  margin: 30px 0 0 10px;
`;

export const ProcessButton = styled.TouchableOpacity`
  margin-top: 50px;
  left: 10%;
  min-height: 60px;
  max-width: 230px;
  border-radius: 27px;
  background-color: #222;
  box-shadow: 2px 5px 10px rgba(34, 34, 34, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ProcessText = styled.Text`
  color: ${color.white};
  font-family: 'roboto';
  font-size: 20px;
`;