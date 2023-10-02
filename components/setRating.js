import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import React from 'react';

//variavel que pega a largura da tela:
const windowWidth = Dimensions.get('window').width;

//variavel que pega a altura da tela:
const windowHeight = Dimensions.get('window').height;

//variavel que pega a altura barra de status, que fica no topo da tela:
const statusBarHeight = StatusBar.currentHeight;

//componente de classe com react:
export default class setRating extends React.Component {
  state = {
    nota: '',
    texto: '',
    idUser: 0,
  };

  //função para cuidar do valor de e-mail:
  handleRatingChange = (newText) => {
    this.setState({
      nota: newText,
    });
  };

  //função para cuidar do valor de senha:
  handleTextChange = (newText) => {
    this.setState({
      texto: newText,
    });
  };

  //função para cuidar do valor de senha:
  handleIdChange = (newText) => {
    this.setState({
      idUser: newText,
    });
  };

  //função para cadastrar usuario
  cadastraUsuario = async () => {
    let response = await fetch('http://192.168.1.64:3000/createRatings', {
      method: 'POST',
      //esse headers define o tipo de resposta que aceitamos:
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      //esse body é por onde as informações são enviadas para o backend
      body: JSON.stringify({
        texto: this.state.texto,
        nota: this.state.nota,
        idUser: this.state.idUser,
      }),
    });
    console.log(response);
  };
  render() {
    return (
      <View style={styles.inputWrapper}>
        <View style={{ alignItems: 'center', width: 350 }}>
          <Text style={styles.titulo}> Criar Avaliação </Text>
        </View>

        <TextInput
          placeholder='nota'
          style={styles.textInput}
          onChangeText={this.handleRatingChange}
          numeric={true}
        />

        <TextInput
          placeholder='Digite um texto'
          style={styles.textInput}
          onChangeText={this.handleTextChange}
        />

        <TextInput
          placeholder='Digite seu id'
          style={styles.textInput}
          onChangeText={this.handleIdChange}
          numeric={true}
        />

        <View style={styles.button}>
          <Button
            title='Registrar'
            onPress={() => this.cadastraUsuario()}
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
