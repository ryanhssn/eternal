import React from 'react';
import { Text, View, Linking, Image } from 'react-native';
import styles from '../style'

const ResultItem = ({user}) => {
	
	const gender = user.gender;
	var getIcon;
	if(gender == 'm') {			
		getIcon = require('../male.png');
	} else {
		getIcon = require('../female.png');
	}
	

	return (
		<View style={styles.resultCont}>
			<Text onPress={() => Linking.openURL(user.url) } style={styles.result}>{<Image style={{ width: 26, height: 30 }} source={getIcon} />}</Text>
			<Text onPress={() => Linking.openURL(user.url) } style={{}}>{user.memory_id} - </Text>
			<Text onPress={() => Linking.openURL(user.url) } style={styles.result}>{user.name}</Text>			
		</View>
	)
}

export default ResultItem;