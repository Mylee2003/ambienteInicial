import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    StatusBar,
    Button,
    TextInput,
    Alert,
    FlatList,
  } from 'react-native';
  
  import React from 'react';
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const statusBarHeight = StatusBar.currentHeight;
  
  export default class Ratings extends React.Component {
    state = {
      object: [],
    };
  
    person = {
      id: 1,
    };
  
    getEvaluations = async () => {
      fetch('http://10.67.168.152:3000/getAllRatings')
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
      this.getEvaluations();
    }
  
    render(props) {
      return (
        <View style={styles.container}>
          <Text>Avaliações:</Text>
          <FlatList
            data={this.state.object}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ marginTop: 20 }}>
                <Text> Nome: {item.id}</Text>
                <Text> nota: {item.nota}</Text>
                <Text> texto: {item.texto}</Text>
              </View>
            )}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      width: windowWidth,
      height: windowHeight - statusBarHeight,
      backgroundColor: '#fff',
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
  