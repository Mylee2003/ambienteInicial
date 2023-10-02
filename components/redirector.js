import React from 'react';
import { View, TouchableOpacity, Button, StyleSheet, Text } from 'react-native';

export default function Redirector(props) {
  return (
    <View>
      <Text>
        Excepteur aliqua excepteur amet sint culpa ad deserunt qui. Sunt amet et
        duis magna dolor id. Anim qui ex Lorem ut dolore ea esse sunt elit
        nulla. Mollit magna laborum cillum magna. Quis veniam occaecat id culpa
        cupidatat proident aute. Sit excepteur adipisicing ea duis ad id
        voluptate.
      </Text>
      <View>
        <Button
          title='Login'
          onPress={() => props.navigation.navigate('Login')}
        />
        <Button
          title='Registro'
          onPress={() => props.navigation.navigate('Register')}
        />
        <Button
          title='Avaliações'
          onPress={() => props.navigation.navigate('Ratings')}
        />
        <Button
          title='Criar Avaliações'
          onPress={() => props.navigation.navigate('setRating')}
        />
      </View>
    </View>
  );
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
});
