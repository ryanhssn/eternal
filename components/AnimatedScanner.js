import React, { Component } from 'react';
import { Text, View, Animated } from 'react-native';

class AnimatedScanner extends Component {

 componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    this.animate()
  }

  animate() {  
	  Animated.sequence([
	    Animated.timing(this.position, {
	    toValue: {x:0, y:190},
	    duration: 2000,
	    delay: 0
	    }),
	    Animated.timing(this.position, {
	    toValue: {x:0, y:0},
	    duration: 2000,
	    }),
	    ]).start(() => {
	      this.animate();
	    });
	}


  render() {
		return (
			
			<Animated.View style={this.position.getLayout()}>
              <View className="" 
              style={{
              	borderColor: 'white', 
              	borderWidth: 2, 
              	width: 192, opacity:0.8 }} />
            </Animated.View>			
		)
	}
}

export default AnimatedScanner;