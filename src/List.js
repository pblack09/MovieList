import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native'

const url = "https://reactnative.dev/movies.json"
var data = []
fetch(url).then(response => response.json()).then(responseJSON => data = (responseJSON.movies))
export default function Article({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (<View styles={styles.view}>
                        <Text style={styles.head} onPress={() => navigation.navigate("Details", { item: item })}>{item.title}</Text>
                        <Text style={styles.desc}>{item.body}</Text>
                    </View>);
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
    head: {
        alignSelf: 'center',
        fontSize: 20,
        color: "#fff",
        backgroundColor: '#7B3AFF',
        paddingHorizontal: 8,
        borderWidth: 2,
    },
});
