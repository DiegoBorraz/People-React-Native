import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { capitalizeFirstLetter } from '../util'

/*
    Componente responsavel por receber da PeopleList uma pessoa, 
    exibir e estilizar a linha
*/
const PeopleListItem = props => {
    const { people } = props;
    const { title, first, last } = people.name;
    return (
            <View style={styles.line}>
                <Image style={styles.avatar} source={{uri: people.picture.thumbnail}} />
                <Text style={styles.lineText}>
                    {`${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}
                </Text>
            </View>
    );
}

const styles = StyleSheet.create ({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        flexDirection: 'row',
        alignItems: 'center',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1, //Mantem a proporção da imagem
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
})

export default PeopleListItem;