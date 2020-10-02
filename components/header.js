import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My ToDos</Text>
        </View>
    )
}

const styles = StyleSheet.create(

    {
        header: {
            height: 80,
            paddingTop: 15,
            backgroundColor: 'coral',


        },
        title: {
            textAlign: "center",
            fontSize: 50,
            color: '#fff'
        }
    }
);

export default Header
