/*This is an Example of React Native Rotate Image View Using Animation*/
import React from 'react';
//import react in our project

import { StyleSheet, View, Animated, Image, Easing } from 'react-native';
////import all the components we needed

export default class AnimatedImage extends React.Component {
  constructor() {
    super();
    this.RotateValueHolder = new Animated.Value(0);
  }

  componentDidMount() {
    this.StartImageRotateFunction();
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);

    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start()
  }
  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-90deg'],
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require('../assets/Boot_Logo/splash1.png',
          )}
          style={{ width: 35, height: 32.3, transform: [{ rotate: RotateData }], }}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#C2C2C2',
  },
});


