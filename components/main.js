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
  TextInput
} from 'react-native';

import axios from 'axios';

import { BarCodeScanner, Permissions } from 'expo';
import Result from './result';
import styles from '../style'



export default class App extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
    text: '',
    users: []
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
    }
  };

  onInputChange = async (text) => {
       let res = await axios.get(`https://www.eternalmemories.in/app/search_memory?q=${text}`)
       this.setState({ users: res.data.data})
    }

  render() {
    return (
      <View style={styles.container}>

        {this.state.hasCameraPermission === null
          ? <Text>Requesting for camera permission</Text>
          : this.state.hasCameraPermission === false
              ? <Text style={{ color: '#fff' }}>
                  Camera permission is not granted
                </Text>
              : <View>
                <BarCodeScanner
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width
                  }}>


         <View style={styles.ScannerCont}>

                  <View style={{flex:6, borderWidth:0}}>
                  
                          <View style={styles.orStyle}>
                            <Image source={require('../Or.png')} />
                          </View>
                          

                          <View style={styles.topText}>
                            <TextInput
                               style={styles.textStyle}
                               underlineColorAndroid='transparent' 
                               placeholder="Enter Memories ID or Name"
                               onChangeText={this.onInputChange} />
                              <Result users={this.state.users} />
                          </View>


                  </View>


                  <View style={styles.threeContCol}>

                          <View style={[styles.OneThreeCol, styles.QrTextCont]}>
                            <Text style={styles.QrText}>Scan any QR code</Text>    
                          </View>

                          <View style={styles.threeContRow}>
                                <View style={styles.oneThreeScan}/>
                                <View style={styles.middleScan}/>
                                <View style={styles.oneThreeScan}/>
                          </View>

                          <View style={styles.OneThreeCol} />

                  </View>


                  <View style={{flex:3}}>

                          <View style={styles.buttomLogo}>
                            <Image style={{marginHorizontal:15, marginVertical: 20}} source={require('../logoBottom.png')} />
                          </View>

                  </View>

                </View>

                </BarCodeScanner>
                </View>
          
          
        }

        {this._maybeRenderUrl()}

        <StatusBar hidden />
      </View>
    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => Linking.openURL(this.state.lastScannedUrl),
        },
        { text: 'No', onPress: () => {} },
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
}

