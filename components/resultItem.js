import React from 'react';
import { Text, View, Linking } from 'react-native';
import styles from '../style'

const ResultItem = ({user}) => {
	
	return (
		<View style={styles.resultCont}>
			<Text onPress={() => Linking.openURL(user.url) } style={[styles.result, {fontWeight:'bold'}]}>{user.name}</Text>
			<Text style={styles.result}>{user.memory_id}</Text>
		</View>
	)
}

export default ResultItem;