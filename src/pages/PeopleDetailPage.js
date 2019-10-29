import React from  'react';
import { View,  Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-navigation';

import Line from '../components/Line';

/*
    Classe responsavel por exibir a pessoa selecionada da lista
*/
export default class PeopleDetailPage extends React.Component {
    render(){
        const { people } = this.props.navigation.state.params;

        return (
            <ScrollView style={styles.container} >
                <Image source={{ uri: people.picture.large }} style={styles.avatar} />
                <View style={styles.detailContainer}>
                    <Line label = 'Email:' content={people.email} />
                    <Line label = 'Cidade:' content={people.location.city} />
                    <Line label = 'Estado:' content={people.location.state} />
                    <Line label = 'Tel:' content={people.phone} />
                    <Line label = 'Cel:' content={people.cell} />
                    <Line label = 'Nacionalidade:' content={people.nat} />
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginBottom: 15,
    },
    avatar: {
        aspectRatio: 1
    },
    detailContainer:{
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        marginBottom: 20,
        elevation: 1
    }
})