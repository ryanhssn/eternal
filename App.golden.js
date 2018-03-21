import React, { Component } from 'react';
import {
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button  
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Main from './components/main';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Main: {
      screen: Main,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {

  render() {
     return <RootStack />;
   }


  };

