import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import { capitalizeFirstLetter } from './src/util';
/*
  Classe App responsavel pela navegação de paginas
  defaultNavigationOptions responsavel por estilizar o Header nativo do StackNAvigator
*/

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => { // people passado na navegação
      const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
      return ({
        title: peopleName,
        // Estilo especifico para esse header
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        }
      });
    }
  }
}, {
  // Estilos goblais para o Header
  defaultNavigationOptions: {
    title: 'Pessoas!',
    headerTintColor: 'white',// Cor da setinha de voltar
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      flexGrow:1,
      textAlign: 'center',
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

