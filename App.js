import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import List from './src/List';
import Details from './src/Details';



function Login({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password" />
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={() => navigation.navigate('List')} />
        <Button
          title="Signup"
          onPress={() => alert("Signup successful!")} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => alert("Reset password link sent")}>
          <Text>Forgot password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#7B3AFF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    margin: 10,
  },
  input: {
    backgroundColor: '#fff',
    width: 250,
    padding: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    margin: 10,
  },
})

//===========================================================//
// RUN THE APPLICATION
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
