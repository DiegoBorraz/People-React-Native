import React, {Component} from 'react';
import { View, Text } from 'react-native';

import Header from './src/components/Header';
import axios from 'axios';

/*
  Classe principal da aplicação
*/

export default class App extends Component {
  /*
    Definimos que ao executar o app criamos um state com array de peoples vazio
  */
  constructor(props){
    super(props);
    this.state = {
      peoples: [
      ]
    }
  }
  /*
    Função nativa do React que se executa ao iniciar a classe e após o render()
    Aqui ele traz os dados das pessoas da api https://randomuser.me com o Axios
    e seta no state atravéz do setState()
  */
  componentDidMount(){
    axios.get('https://randomuser.me/api/?nat=br&results=5')
    .then(response => {
      const {results} =  response.data;
      this.setState({
        peoples: results
      })
    });
  }


  /*
    Função com a responsabilidade de transformar as as informações do state em lista de pessoas
    retornando uma lista pronta
  */
  renderList(){
   const textElements = this.state.peoples.map(people => {
    const { first } = people.name;
    return <Text key = { first } >{ first }</Text>;
   })
   return textElements;
  }

  /*
    Função responsavel por exibir na tela as informações
  */
  render(){
    return (
      <View>
        <Header title="Header Pessoa" />
        {this.renderList()}
      </View>
    );
  }
}


