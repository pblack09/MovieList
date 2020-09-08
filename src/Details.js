import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

export default function Details(props) {
    const item = props.route.params.item;
    return (<View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.main}>Release On: {item.releaseYear}</Text>
        <Text style={styles.main}>Something about {item.title}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#7B3AFF",
    },
    main: {
        fontSize: 24,
        margin: 20,
    }
});
