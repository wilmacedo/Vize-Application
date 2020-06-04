import React, { Component } from 'react';

import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';

import MqttService from '../../services/MqttService';
import { mqtt } from '../../utils/general';

export default class Test extends Component {

  state = {
    isConnected: false,
    message: 'N/A',
    value: false,
  }

  componentDidMount() {
    MqttService.connectClient(
      this.mqttSuccessHandler,
      this.mqttConnectionLostHandler,
    );
  }

  componentWillUnmount() {
    console.info('disconnected from mqtt');
    MqttService.disconnect();
  }

  mqttSuccessHandler = () => {
    console.info('connected to mqtt');

    var topic = `${mqtt.userName}/f/test`;

    MqttService.subscribe(topic, this.onWORLD);

    console.info(MqttService.isConnected);
  }

  onWORLD = message => {
    console.info('mensagem recebida');
    this.setState({ message, });
    var value = message === 'ligado' ? true : false;
    this.setState({ value });
  }

  onPublish = () => {
    var topic = `${mqtt.userName}/f/test`;
    MqttService.publishMessage(topic, "Hello from the app");
  }

  mqttConnectionLostHandler = () => {
    console.info('disconnected from mqtt');

    this.setState({ isConnected: false });
  }

  render() {
    var { message, value } = this.state;

    return (
      <SafeAreaView>
        <Text>Ultima mensagem recebida: {message}</Text>
        <Text>Valor: {!value ? 'falso' : 'verdadeiro'}</Text>
        <Button
          onPress={this.onPublish}
          title="Publish"
        />
      </SafeAreaView>
    );
  }
}