import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, View, TextInput, Button } from 'react-native'

function AddTodo({ submitHandler }) {
    const [text, setText] = useState('')
    const changeHandler = (value) => {
        setText(value);
    }
    return (
        <View>
            <TextInput placeholder="ToDo...." style={styles.inputbox} onChangeText={(value) => { changeHandler(value) }}></TextInput>
            <View style={styles.button}>
                <Button onPress={() => { submitHandler(text) }} title='+'></Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        inputbox: {
            width: '70%',
            padding: 16,
            marginTop: 8,
            borderColor: '#00ff00',
            borderWidth: 3,
            borderRadius: 10,
            margin: 20,
            fontSize: 30,


        },
        button: {
            width: "20%",
            position: "absolute",
            top: 27,
            right: 10

        }

    }
)
export default AddTodo
