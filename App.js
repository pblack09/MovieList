import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movie List" component={HomeScreen} />
        <Stack.Screen name="Shawshank Redemption" component={Movie1} />
        <Stack.Screen name="Avengers: Endgame" component={Movie2} />
        <Stack.Screen name="Blazing Saddles" component={Movie3} />
        <Stack.Screen name="Jaws" component={Movie4} />
        <Stack.Screen name="E.T." component={Movie5} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

//========================================================
// HOME SCREEN
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Movies</Text>
      <Text style={styles.info}>
        Below are the current 'Top 5 Movies' to watch.
      </Text>
      <View style={styles.button}>
        <Button
          style={{margin: 10}}
          title="Shawshank Redemption"
          onPress={() => navigation.navigate("Shawshank Redemption")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Avengers: Endgame"
          onPress={() => navigation.navigate("Avengers: Endgame")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Blazing Saddles"
          onPress={() => navigation.navigate("Blazing Saddles")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Jaws"
          onPress={() => navigation.navigate("Jaws")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="E.T."
          onPress={() => navigation.navigate("E.T.")}
        />
      </View>
    </View>
  );
}

//========================================================
// GRADE LEVELS

function Movie1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shawshank Redemption</Text>
      <Image style={styles.image} source={require('./assets/shawshank.png')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Movie2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avengers: Endgame</Text>
      <Image source={require('./assets/avengers.png')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function Movie3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blazing Saddles</Text>
      <Image source={require('./assets/blazing_saddles.png')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function Movie4({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jaws</Text>
      <Image style={{resizeMode: 'center'}} source={require('./assets/jaws.png')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function Movie5({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>E.T.</Text>
      <Image source={require('./assets/et.png')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}


//========================================================
// HEADER



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303a52",
    alignItems: "center",
  },
  title: {
    color: "#d9bb73",
    fontSize: 32,
    shadowRadius: 10,
    padding: 16,
    marginTop: 40,
    letterSpacing: 2,
    textAlign: 'center',
  },
  info: {
    color: "#fff",
    fontSize: 17,
    margin: 20,
    padding: 6,
    textAlign: "center",
  },
  button: {
    margin: 10,
    width: "40%",
  },
});

export default App;
