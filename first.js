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



export default class First extends Component {

  static navigationOptions = {
        header: null
    }

  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
    scanned: false,
    flash: 'off',
    handleTorch: false,
    flashImg: null   
  };

  componentDidMount() {
    this._requestCameraPermission();
    this.setState({
      flashImg: require('./flashOn.png')
    })
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handlePressTorch = () => {
    const { handleTorch, flash } = this.state;
    if(handleTorch==false){
      this.setState({ 
        flash: 'on',
        flashImg: require('./flashOff.png')
      })
    } else {
      this.setState({
        flash: 'off',
        flashImg: require('./flashOn.png')
      })
    }
    this.setState({ handleTorch: !handleTorch})
  }

 _handleBarCodeRead = data => {
    Alert.alert(
      'Open this url?',
      JSON.stringify(data.data),
      [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => Linking.openURL(data.data)},
  ],
    );
    
  };



  render() {
    let renderAnimation;

    if(this.state.scanned) {
      renderAnimation = (
          <View />
        )
    } else {
        renderAnimation = (
          <AnimatedScanner />
        )
    }
    

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
                  torchMode={this.state.flash}
                  style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width
                  }}>


         <View style={styles.ScannerCont}>

                  <View style={{flex:5, borderWidth:0}}>
                  
                          <View style={styles.orStyle}>
                            <Image source={require('./Or.png')} />
                          </View>
                          
                          <View style={styles.topText}>
                             <Text style={styles.textShow} 
                             onPress={() => this.props.navigation.navigate('Details')}>
                              Enter Memories ID or Name
                             </Text>
                          </View>

                  </View>


                  <View style={styles.threeContCol}>

                          <View style={[styles.OneThreeCol, styles.QrTextCont]}>
                            <Text style={styles.QrText}>Scan any QR code</Text>    
                          </View>

                          <View style={styles.threeContRow}>
                                <View style={styles.oneThreeScan}/>
                                <View style={styles.middleScan}>
                                    {renderAnimation}                                    
                                </View>
                                <View style={styles.rightScan}>
                                    <View style={styles.semi} />
                                    <TouchableOpacity activeOpacity={1} onPress={this._handlePressTorch} style={styles.semiFlash}>
                                      <Image source={this.state.flashImg} />
                                    </TouchableOpacity>
                                    <View style={styles.semi} />
                                </View>
                          </View>

                          <View style={styles.OneThreeCol} />

                  </View>


                  <View style={{flex:3}}>

                          <View style={styles.buttomLogo}>
                            <Image style={{marginBottom: 20}} source={require('./logoBottom.png')} />
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

