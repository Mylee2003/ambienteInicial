import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  Button,
  TextInput,
  Alert,
} from 'react-native';

import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight;

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    objeto: [],
    logged: false,
  };

  showAlert = () =>
    Alert.alert(
      'Usuário não encontrado',
      'Verifique se os dados informados estão corretos.',
      [
        {
          text: 'Entendi',
        },
      ],
      {
        cancelable: true,
      }
    );

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
      let response = await fetch('http://10.67.168.152:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });

      // Ensure the response status is ok before trying to parse JSON
      if (response.ok) {
        let data = await response.json();
        console.log(data.mensagem);
        if (data.mensagem == 'true') {
          this.setState({
            logged: true,
          });
        } else {
          this.showAlert();
        }
      } else {
        console.error('Erro na requisição:', response.status);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  render(props) {
    return (
      <View style={styles.inputWrapper}>
        <View style={{ alignItems: 'center', width: 350 }}>
          <Text style={styles.titulo}> Login </Text>
          <Text> {this.state.logged ? 'logado' : 'Não logado'} </Text>
        </View>

        <TextInput
          placeholder='Digite um e-mail'
          style={styles.textInput}
          onChangeText={this.handleEmailChange}
        />

        <TextInput
          placeholder='Digite uma senha'
          style={styles.textInput}
          onChangeText={this.handlePasswordChange}
        />

        <View style={styles.button}>
          <Button
            title='Logar'
            onPress={() => this.login()}
            style={styles.button}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: windowWidth,
    alignItems: 'center',
    height: windowHeight - statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 35,
    color: '#0c164e',
    marginTop: 15,
    marginBottom: 15,
  },
  textInput: {
    borderBottomWidth: 1,
    width: 350,
    fontSize: 18,
    paddingLeft: 12,
    paddingBottom: 6,
    marginTop: 35,
  },
  button: {
    marginTop: 70,
  },
});

const individualStyles = StyleSheet.create({
  confirmInput: {
    marginBottom: 0,
  },
});

//          {JSON.stringify(
//  this.state.objeto[1]?.email || 'Nenhum email disponível'
//  )}
