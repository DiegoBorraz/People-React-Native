import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PeopleListItem from './PeopleListItem'
/*
    Component responsavel porreceber em sua props
    uma lista de pessoas e listar o seu primeiro nome
    Veja que a PeopleList recebe onPressItem de PeoplePage e passa para PeopleListItem como navigateToPeopleDetail
*/
const PeopleList = props => {
    const { peoples, onPressItem } = props;
    
    return (
        <FlatList 
            style={styles.container}
            data={ peoples }
            renderItem={({ item }) => (
                <PeopleListItem 
                    people={item} 
                    navigateToPeopleDetail= {onPressItem} />
            )}
            keyExtractor={item => item.name.first} // A lista precisa de um key
        /> 
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e2f9ff"
    }
    
});
export default PeopleList;