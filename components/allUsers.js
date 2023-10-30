<<<<<<< HEAD
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    StatusBar,
    Button,
    TextInput,
    Alert,
    FlatList
  } from 'react-native';
  
  import React from 'react';
  
  export default class GetAllUsers extends React.Component {
    state ={
        object:[],
    }

    allusers = async() =>{
        fetch('http://10.67.168.146:3000/getAllUsers')
        
            .then(response => response.json())
        
            .then(data => {
                console.log(data)
                this.setState({
                    object: data,
                })  
            })
        
            .catch(error => console.log(error));
    }
    render(){
        return(
        <View>
            <Button
            title='usuarios'
            onPress={()=> this.allusers()}
            />

<FlatList
=======
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
    fetch('https://10.67.168.152:3000/getAllUsers')
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
>>>>>>> 0144942ecca56fe18b6f3cbc36655aafae3a75d7
          data={this.state.object}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginTop: 20 }}>
              <Text> id: {item.id}</Text>
              <Text> email: {item.email}</Text>
<<<<<<< HEAD
              <Text> password: {item.password}</Text>
            </View>
          )}
        />
        </View>
      );
    }
}
=======
              <Text> senha: {item.password}</Text>
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
>>>>>>> 0144942ecca56fe18b6f3cbc36655aafae3a75d7
