import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight;

export default class App extends React.Component {
  state = {
    email: '',
    password: '',
    objeto: [],
  };

  handleEmailChange = (newText) => {
    this.setState({
      email: newText,
    });
  };

  handlePasswordChange = (newText) => {
    this.setState({
      password: newText,
    });
  };

    login = async () => {
      try {
        const response = await fetch('http://192.168.1.64:3000/login');
        const data = await response.json();

        // Verifique se o array tem pelo menos dois elementos
        if (data.length >= 2) {
          // Atualize o estado com os dados da API
          this.setState({
            email: data[1].email,
            password: data[1].password,
            objeto: data,
          });

          // Agora você pode acessar as informações
          console.log('Email:', this.state.email);
          console.log('Senha:', this.state.password);
          console.log('Objeto completo:', this.state.objeto);
        } else {
          console.error(
            'Não há dados suficientes no array para acessar o segundo elemento.'
          );
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {JSON.stringify(
            this.state.objeto[1]?.email || 'Nenhum email disponível'
          )}
        </Text>
        <Button title='mostrar' onPress={() => this.login()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: statusBarHeight,
    backgroundColor: '#0c164e',
    //width: windowWidth,
    alignItems: 'center',
    //height: windowHeight,
    backgroundColor: '#fff',
  },
  esqueceu: {
    textAlign: 'right',
  },
  titulo: {
    fontSize: 40,
    color: '#0c164e',
    textAlign: 'center',
    marginBottom: 35,
  },
  textInput: {
    borderBottomWidth: 1,
    width: 350,
    fontSize: 18,
    paddingLeft: 12,
    paddingBottom: 6,
    marginBottom: 35,
  },
});
