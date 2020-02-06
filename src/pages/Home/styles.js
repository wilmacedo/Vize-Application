import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 20px 0px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 26px;
  font-family: 'roboto-light';
`;

export const Notification = styled.View`
  margin-left: -3px;
  margin-right: -5px;
  margin-top: 15px;
  flex-direction: row;
  border-width: 1px;
  border-radius: 30px;
  align-items: center;
  padding: 5px 10px;
  border-color: #465170;
`;

export const Description = styled.Text`
  color: #bdbdbd;
  padding-left: 10px;
  flex: 1;
`;