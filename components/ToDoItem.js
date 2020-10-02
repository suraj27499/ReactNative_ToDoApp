import React from 'react'
import { TouchableOpacity, Text, StyleSheet, } from 'react-native'

function ToDoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onLongPress={() => pressHandler(item.key)} >
            <Text style={styles.item}>{item.todo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        item: {
            padding: 16,
            marginTop: 16,
            borderColor: 'dodgerblue',
            borderWidth: 1,
            borderStyle: "dashed",
            borderRadius: 10,
            margin: 20
        }
    }
)
export default ToDoItem
