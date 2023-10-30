import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ScrollView,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: 0,
      logradouro: '',
      bairro: '',
      municipio: '',
      uf: '',
      numero: 0,
      object: [],
      userId: 0,
    };
  }

  buscarEndereco = async () => {
    const { cep } = this.state;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.ok) {
      const data = await response.json();
      if (!data.erro) {
        const { logradouro, bairro, localidade, uf } = data;
        this.setState({
          logradouro: logradouro,
          bairro: bairro,
          municipio: localidade,
          uf: uf,
        });
      }
    }
  };

  cadastraEndereco = async () => {
    const response = await fetch('https://10.67.168.152:3000/createAdress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      body: JSON.stringify({
        userId: this.state.userId,
        cep: this.state.cep,
        uf: this.state.uf,
        municipio: this.state.municipio,
        bairro: this.state.bairro,
        logradouro: this.state.logradouro,
        numero: this.state.numero,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  getAdresses = async () => {
    fetch('http://192.168.1.64:3000/getAllAdresses')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          object: data,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getAdresses();
  }

  handleCepChange = (text) => {
    this.setState({ cep: text });

    if (text.length === 8) {
      setTimeout(() => {
        this.buscarEndereco();
      }, 0);
    } else {
      this.setState({
        uf: '',
        municipio: '',
        bairro: '',
        logradouro: '',
      });
    }
  };

  handleNumberChange = (text) => {
    this.setState({ numero: text });
  };

  handleUserIdChange = (text) => {
    this.setState({ userId: text });
  };

  render() {
    const { cep, logradouro, bairro, municipio, uf, numero, userId } =
      this.state;

    return (
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Digite o id'
          value={userId}
          onChangeText={this.handleUserIdChange}
          keyboardType='numeric'
        />

        <TextInput
          style={styles.input}
          placeholder='Digite o CEP'
          value={cep}
          onChangeText={this.handleCepChange}
          keyboardType='numeric'
        />

        {/* Adicione os TextInput para cada parte do endereço */}
        <TextInput
          style={[styles.input, styles.readOnlyInput]}
          placeholder='Logradouro'
          value={logradouro}
          editable={false}
          selection={{ start: 0, end: 0 }} // Adicione esta linha
        />
        <TextInput
          style={[styles.input, styles.readOnlyInput]}
          placeholder='Bairro'
          value={bairro}
          editable={false}
          selection={{ start: 0, end: 0 }} // Adicione esta linha
        />
        <TextInput
          style={[styles.input, styles.readOnlyInput]}
          placeholder='Cidade'
          value={municipio}
          editable={false}
          selection={{ start: 0, end: 0 }} // Adicione esta linha
        />
        <TextInput
          style={[styles.input, styles.readOnlyInput]}
          placeholder='Estado'
          value={uf}
          editable={false}
          selection={{ start: 0, end: 0 }} // Adicione esta linha
        />
        <TextInput
          style={styles.input}
          placeholder='Digite o Número'
          keyboardType='numeric'
          value={numero}
          onChangeText={this.handleNumberChange}
        />

        <Button
          title='Cadastrar'
          onPress={() => {
            this.cadastraEndereco();
          }}
        />

        <View style={styles.container}>
          <Text>Endereços:</Text>
          <FlatList
            data={this.state.object}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ marginTop: 20 }}>
                <Text> id: {item.id}</Text>
                <Text> cep: {item.cep}</Text>
                <Text> estado: {item.uf}</Text>
                <Text> municipio: {item.municipio}</Text>
                <Text> bairro: {item.bairro}</Text>
                <Text> rua: {item.logradouro}</Text>
                <Text> numero: {item.numero}</Text>
                <Text> idUser: {item.userId}</Text>
                <View
                  style={{ width: 300, height: 1, backgroundColor: 'black' }}
                ></View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  readOnlyInput: {
    textAlignVertical: 'top', // Adicione essa linha
  },
  addressText: {
    marginTop: 10,
    fontSize: 16,
  },
});
