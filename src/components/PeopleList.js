import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
    Component responsavel porreceber em sua props
     uma lista de pessoas e listar o seu primeiro nome
*/
const PeopleList = props => {
    const { peoples } = props;
    const textElements = peoples.map(people => {
        const { first } = people.name;
        return (
            <Text key = { first } style={styles.line}>
                <Text stylw={styles.lineText} >{ first }</Text>
            </Text>
        );
    });
    return (
        <View style={styles.container} > 
            {textElements}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e2f9ff"
    },
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        flexDirection: 'row',
        alignItems: 'center',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15
    }
});
export default PeopleList;