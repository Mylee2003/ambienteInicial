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

  getUsers = async () => {
    fetch('http://192.168.1.64:3000/getAllUsers')
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
    this.getUsers();
  }

  render() {
    return (
      <ScrollView>
        <Text>Usuários:</Text>
        <FlatList
          data={this.state.object}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginTop: 20 }}>
              <Text> id: {item.id}</Text>
              <Text> cep: {item.email}</Text>
              <Text> estado: {item.password}</Text>
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
