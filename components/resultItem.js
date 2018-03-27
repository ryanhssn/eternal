import React from 'react';
import { Text, View, Linking } from 'react-native';
import styles from '../style'

const ResultItem = ({user}) => {
	
	return (
		<View style={styles.resultCont}>
			<Text onPress={() => Linking.openURL(user.url) } style={styles.result}>{user.gender}</Text>
			<Text onPress={() => Linking.openURL(user.url) } style={{}}>{user.memory_id} - </Text>
			<Text onPress={() => Linking.openURL(user.url) } style={styles.result}>{user.name}</Text>			
		</View>
	)
}

export default ResultItem;