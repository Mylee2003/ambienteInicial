import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Redirector from '../components/redirector';
import Register from '../components/register';
import Login from '../components/login';
import Ratings from '../components/ratings';
import setRating from '../components/setRating';

class Stack extends Component {
  render() {
    return <AppContainer />;
  }
}

const myStack = createStackNavigator(
  {
    Redirector: Redirector,
    Register: Register,
    Login: Login,
    Ratings: Ratings,
    setRating: setRating,
  },
  {
    initialRouteName: 'Redirector',
  }
);

const AppContainer = createAppContainer(myStack);

export default Stack;
