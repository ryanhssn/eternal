import React, { Component } from 'react';
import {
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Animated
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import axios from 'axios';

import { BarCodeScanner, Permissions } from 'expo';

import TextField from './components/TextField';
import AnimatedScanner from './components/AnimatedScanner';
import styles from './style'

import HomeScreen from './first';
import DetailsScreen from './detailSearch';


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}