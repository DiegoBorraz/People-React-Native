import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
    Componente responsavel pelas linhas da PeopleDetailPage
*/
const Line = ({ label = "" , content = ""}) => { // default = "" previne erro de campo null
    return (
        <View style={ styles.line }>
            <Text style={ [
                styles.cell,
                styles.label,
                label.length > 20 ? styles.longLabel : null // Verifica a quantidade de caracteres, se for maior de 8, adiciona o style do longLabel
            ]}>{ label }</Text>
            <Text style={ [styles.cell, styles.content]}>{ content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth:1,
        borderColor: '#C5C5C5'
    },
    cell: {
        fontSize: 14,
        paddingLeft: 5,
        //borderWidth: 1
    },
    label: {
        fontWeight: 'bold',
        flex: 2
    },
    content: {
        flex: 4
    },
    longLabel: {
        fontSize: 12
    }
});

export default Line;