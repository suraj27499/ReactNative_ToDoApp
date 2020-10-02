import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, ScrollView, View, Platform } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddTodo';
export default function App() {


  const [todos, setTodos] = useState([
    { todo: "go for a walk", key: '1' },
    { todo: "take pills", key: '2' },
    { todo: "get groceries", key: '3' },

  ])
  const pressHandler = (key) => {
    setTodos((Prevtodos) => {
      return Prevtodos.filter((todo) => todo.key != key);
    })
  }

  const submitHandler = (todo) => {
    setTodos((prevTodos) => {
      return (
        [
          { todo: todo, key: Math.random().toString() },
          ...prevTodos
        ]
      )

    })
  }
  return (

    <View style={styles.container}>
      <Header />
      <AddToDo submitHandler={submitHandler} />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <ToDoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0

  },
});
