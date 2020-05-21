import React, { Component } from 'react';

import { View, Text } from 'react-native';
import WS from 'react-native-websocket';

export default class Room extends Component {
  state = {
    data: 'Nenhum dado recebido.'
  }

  render() {
    return (
      <View>
        <WS
          ref={ref => { this.ws = ref }}
          url='ws://vize-iot.herokuapp.com'
          onOpen={() => {
            console.log('Conexao aberta')
          }}
          onMessage={msg => {
            console.log('Dado recebido:', msg.data)
            this.setState({ data: msg.data })
          }}
          onError={error => {
            console.log('Erro: ', error)
          }}
          onClose={() => {
            console.log('Conexao encerrada')
          }}
          reconnect
        />
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}
