import React, {Component} from 'react';
import { View, Text } from 'react-native';

import Header from './src/components/Header';

/*
  Classe principal da aplicação
*/

export default class App extends Component {
  
  renderList(){
    const names = [
      'Diego1',
      'Diego2',
      'Diego3',
      'Diego4',
      'Diego5'
    ];
    const textElements =  names.map(name => {
      return <Text key = {name} >{name}</Text>
    });
    return textElements;
  }

  render(){
    return (
      <View>
        <Header title="Header Pessoa" />
        {this.renderList()}
      </View>
    );
  }
}


