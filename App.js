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

import { Asset, AppLoading } from 'expo';

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

  state = {
    isReady: false
  };

  render() {
    if(!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}/>
      )
    }

    return <RootStack />;
  }

  async _cacheResourcesAsync() {
    const images = [
      require('./Logo_full.png'),
      require('./Or.png'),
      require('./logoBottom.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    })

    return Promise.all(cacheImages)
  }
}