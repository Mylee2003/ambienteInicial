import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Redirector from '../components/redirector';
import RegisterUser from '../components/registerUser';
import Login from '../components/login';
import Ratings from '../components/allRatings';
import RegisterUserAdress from '../components/registerUserAdress';
import RegisterClinicAdress from '../components/registerClinicAdress';
import SetRating from '../components/setRating';
import AllAdresses from '../components/allAdresses';
import AllUsers from '../components/allUsers';
import AllRatings from '../components/allRatings';
import AllClinics from '../components/AllClinics';

class Stack extends Component {
  render() {
    return <AppContainer />;
  }
}

const myStack = createStackNavigator(
  {
    Redirector: Redirector,
    RegisterUser: RegisterUser,
    Login: Login,
    Ratings: Ratings,
    RegisterUserAdress: RegisterUserAdress,
    RegisterClinicAdress:RegisterClinicAdress,
    SetRating: SetRating,
    AllRatings: AllRatings,
    AllAdresses: AllAdresses,
    AllUsers: AllUsers,
    AllClinics: AllClinics,
  },
  {
    initialRouteName: 'Redirector',
  }
);

const AppContainer = createAppContainer(myStack);

export default Stack;
