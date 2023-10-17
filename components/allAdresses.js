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
      object: [],
    };
  }

  getAdresses = async () => {
    fetch('https://10.67.168.152:3000/getAllAdresses')
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

  render() {
    return (
      <ScrollView>
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
      </ScrollView>
    );
  }
}
