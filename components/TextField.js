import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import axios from 'axios';

import styles from '../style';
import Result from './result';

class TextFeild extends Component {
	state = {
		text: '',
		users: []
	}

  onInputChange = async (text) => {
		if(text.length>=3){
			let res = await axios.get(`https://www.eternalmemories.in/app/search_memory?q=${text}`)
			this.setState({ users: res.data.data})
		}       
	}

	render() {
		return (
			<View style={styles.topText}>
                <TextInput
                   style={styles.textStyle}
                   underlineColorAndroid='transparent' 
                   placeholder="Enter Memories ID or Name"
                   onChangeText={this.onInputChange} />
                  <Result users={this.state.users} />
             </View>
		)
	}
}

export default TextFeild;