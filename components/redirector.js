import React from 'react';
import {
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Redirector(props) {
  return (
    <View style={styles.container}>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Login')}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Register')}
      >
        <Text>Registro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('SetRating')}
      >
        <Text>Criar Avaliações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('RegisterAdress')}
      >
        <Text>Registrar Endereço</Text>
      </TouchableOpacity>

      <View
        style={{ width: 300, height: 1, backgroundColor: 'black', margin: 20 }}
      ></View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Ratings')}
      >
        <Text>Avaliações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0c164e',
    width: windowWidth,
    alignItems: 'center',
    height: windowHeight,
    backgroundColor: '#fff',
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: 'lightblue',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
