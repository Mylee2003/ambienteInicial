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
        onPress={() => props.navigation.navigate('RegisterUser')}
      >
        <Text>Registrar Usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('SetRating')}
      >
        <Text>Criar Avaliações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('RegisterUserAdress')}
      >
        <Text>Registrar Endereço de Usuario</Text>
      </TouchableOpacity>

      <View
        style={{ width: 300, height: 1, backgroundColor: 'black', margin: 20 }}
      ></View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('AllRatings')}
      >
        <Text>Todas Avaliações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('AllUsers')}
      >
        <Text>Todos Usuarios</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('AllAdresses')}
      >
        <Text>Todos os endereços</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('AllClinics')}
      >
        <Text>Todas Clínicas</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0c164e',
    width: windowWidth,
    alignItems: 'center',
    height: windowHeight,
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
