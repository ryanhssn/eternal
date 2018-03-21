import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ResultItem from './resultItem';

const Result = (props) =>  {

	if(!props.users){
		return <Text>No result</Text>
	}
		const resultItems = props.users.map((user) => {
			return <ResultItem key={user.memory_id} user={user} />
		})
	

	return (
		<View>
			{resultItems}
		</View>
	)

}

export default Result;