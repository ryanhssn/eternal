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
			<View style={localStyle.container}>
                <TextInput
                   style={localStyle.textBar}
                   underlineColorAndroid='transparent' 
                   placeholder="Enter Memories ID or Name"
                   onChangeText={this.onInputChange} />
                  <Result users={this.state.users} />
             </View>
		)
	}
}

const localStyle = {
	container: {
		backgroundColor: '#fff',
    	//padding: 30,    	
    	paddingTop: 10,
    	paddingBottom: 10,
    	paddingHorizontal: 20,
    	//marginVertical: 25,
    	alignItems:'stretch',
    	
	},
	textBar: {
	    height:30,
        borderBottomColor: '#32475b',
        borderBottomWidth: 1,
	}
}

export default TextFeild;