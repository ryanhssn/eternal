import React, { Component } from 'react';
import { Text, View, Button, TextInput, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios';

import TextField from './components/TextField';
import Result from './components/result';

class DetailSearch extends Component {
	static navigationOptions = {
        headerTransparent: true,
        
    }
	
	state = {
		text: '',
		users: []
	}

  onInputChange = async (text) => {
		if(text.length>=3){
			let res = await axios.get(`https://www.eternalmemories.in/app/search_memory?q=${text}`)
			this.setState({ users: res.data.data})
		}       
	
		if(text.length<3){			
			this.setState({ users: []})
		}       


	}

	render() {
		return (
		<View>
			<View style={localStyles.textBarContainer}>
				<View>
					<Icon
					  name='chevron-left'
					  iconStyle={localStyles.iconStyle}
			          size={50}
			          onPress={() => this.props.navigation.goBack()} />
		        </View>				
		        <View style={localStyles.textBarView}>
					<TextInput
	                   style={localStyles.textBar}
	                   underlineColorAndroid='transparent' 
	                   placeholder="Enter Memories ID or Name"
	                   autoFocus={true}
	                   onChangeText={this.onInputChange} />                 
				</View>
				
			</View>

			<View style={localStyles.resultContainter}>
				 <Result users={this.state.users} />
			</View>

			<View style={localStyles.imageStyle}>
				 <Image source={require('./Logo_full.png')} />
			</View>

		</View>
		)
	}
}


export default DetailSearch;

const localStyles = {
	iconStyle: {
		backgroundColor: 'white',
		width: 50
		
	},
	textBarContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'stretch',		
	},
	textBarView: {
		
		width: 320,
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
	},
	imageStyle: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		marginTop: 180,
		opacity: 0.7,
		marginHorizontal:30
	}

}