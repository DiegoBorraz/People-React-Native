import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem'
/*
    Component responsavel porreceber em sua props
    uma lista de pessoas e listar o seu primeiro nome
    Veja que a PeopleList recebe onPressItem de PeoplePage e passa para PeopleListItem como navigateToPeopleDetail
*/
const PeopleList = props => {
    const { peoples, onPressItem } = props;
    const items = peoples.map(people => {
        return <PeopleListItem 
                    key={people.name.first}
                    people={people} 
                    navigateToPeopleDetail= {onPressItem}
                />
    })
    return (
        <View style={styles.container} > 
            {items}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e2f9ff"
    }
    
});
export default PeopleList;