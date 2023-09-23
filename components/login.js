
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Button
} from 'react-native';

import React from 'react';

//variavel que pega a largura da tela:
const windowWidth = Dimensions.get('window').width;

//variavel que pega a altura da tela:
const windowHeight = Dimensions.get('window').height;

//variavel que pega a altura barra de status, que fica no topo da tela:
const statusBarHeight = StatusBar.currentHeight;

//componente de classe com react:
export default class App extends React.Component {
  state = {
    email: '',
    password: '',
	objeto:{},
  };

//função para cuidar do valor de e-mail:
  handleEmailChange = (newText) => {
    this.setState({
      email: newText,
    });
  };

//função para cuidar do valor de senha:
  handlePasswordChange = (newText) => {
    this.setState({
      password: newText,
    });
  };

//fecth para buscar informações de usuários cadastrados:
  login = async () => {
   fetch('http://192.168.1.64:3000/login')
   
   //transformar a resposta em json:
  .then(response => response.json())
  
    //declarar a variavel objeto como essa resposta json:
  .then(data => {
    this.setState({
	objeto: data
	})
  })
  
  //verificar se há erro:
  .catch(error => {
    console.error(error);
  })}
  
  render() {
    return (
	<View style={styles.container}>
	<Text>
	{
	//passar JSON para string para poder mostrar em tela
	JSON.stringify(this.state.objeto)}
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
    marginTop: statusBarHeight,
    backgroundColor: '#0c164e',
    width: windowWidth,
    alignItems: 'center',
    height: windowHeight,
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