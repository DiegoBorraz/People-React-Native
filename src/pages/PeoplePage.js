import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View  } from 'react-native';
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
      peoples: [],
      loading: false,
      error: false
    }
  }
  /*
    Função nativa do React que se executa ao iniciar a classe e após o render()
    Aqui ele traz os dados das pessoas da api https://randomuser.me com o Axios
    e seta no state atravéz do setState()
  */
  componentDidMount(){
    this.setState({loading: true})
    setTimeout(() => { // Crio um delay de 1500 milesegundos
      axios.get('https://randomuser.me/api/?nat=br&results=35')
      .then(response => {
        const {results} =  response.data;
        this.setState({
          peoples: results,
          loading: false,
        })
      }).catch(error => {
        this.setState({
          loading: false,
          error: true})
      });
    }, 1500)
  }
  
  renderPage(){
    if(this.state.loading){
      return <ActivityIndicator size="large" color="#6ca2f7" />;
    } 
    if(this.state.error){
      return <Text style={styles.error}>Ops... Algo deu errado</Text>;
    }
    return (
      <PeopleList 
        peoples={this.state.peoples}  // Recebendo o peoples
        onPressItem={( pageParams ) => { //Dispara função de navegação
          this.props.navigation.navigate('PeopleDetail', pageParams);
        }} />
    );
  }
  

  /*
    Função responsavel por exibir na tela as informações
    Veja que o PeoplePage esta passando o onPressItem para a PeopleList
  */
  render(){
    return (
      <View style={styles.container}>
        {this.renderPage() }  
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    color: 'red',
    alignSelf: 'center'
  }
})

