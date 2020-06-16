import React from 'react';

import {
  HeaderContainer,
  HeaderHandle,
  Container,
  AddContainer,
  AddIcon,
  AddTitle,
  RoomContainer,
  RoomImage,
  RoomText,
  RoomDescription,
} from './styles.js';
import BottomSheet from 'reanimated-bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import { color }  from '../../utils/general';

export default class BottomSheetAdd extends React.Component {
  renderHeader = () => (
    <HeaderContainer>
      <HeaderHandle />
    </HeaderContainer>
  );

  renderContent = () => (
    <Container>
      <AddContainer>
        <AddIcon><Ionicons name="ios-add" size={60} color={color.textHighlight} /></AddIcon>
        <AddTitle>Adicionar Cômodo</AddTitle>
      </AddContainer>
      <RoomContainer>
        <RoomImage path={'../../../assets/images/'}/>
        <RoomText>Quarto</RoomText>
        <RoomDescription>4 Aparelhos conectados</RoomDescription>
      </RoomContainer>
    </Container>
  )

  render() {
    return (
      <BottomSheet
        ref={this.props.reference}
        snapPoints={this.props.snapPoints}
        renderHeader={this.renderHeader}
        renderContent={this.renderContent}
        callbackNode={this.props.callback}
        initialSnap={this.props.initialSnap}
        onOpenStart={this.props.onOpenStart}
        onCloseEnd={this.props.onCloseEnd}
      />
    );
  }
}