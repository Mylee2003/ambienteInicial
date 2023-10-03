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
          data={this.state.object}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginTop: 20 }}>
              <Text> id: {item.id}</Text>
              <Text> email: {item.email}</Text>
              <Text> password: {item.password}</Text>
            </View>
          )}
        />
        </View>
      );
    }
}