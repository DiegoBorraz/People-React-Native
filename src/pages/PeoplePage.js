import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import PeopleList from '../components/PeopleList'

/*
  Classe principal da aplicação
*/
export default class PeoplePage extends React.Component {
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
   return textElements;
  }

  /*
    Função responsavel por exibir na tela as informações
    Veja que o PeoplePage esta passando o onPressItem para a PeopleList
  */
  render(){
    return (
      <View>
        <PeopleList 
        peoples={this.state.peoples}  // Recebendo o peoples
        onPressItem={( pageParams ) => { //Dispara função de navegação
          this.props.navigation.navigate('PeopleDetail', pageParams);
        }}
        />
      </View>
    );
  }
}


