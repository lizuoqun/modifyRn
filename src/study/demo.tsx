import {StyleSheet, Text, ToastAndroid,Dimensions} from 'react-native';
import React from 'react';
const FunctionDemo = () => {
  const {width, height} = Dimensions.get('window');
  ToastAndroid.show(`Screen width is ${width.toFixed(2)} and height is ${height.toFixed(2)}`, 2000);
  return  <Text style={styles.text}>this is a function component</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default FunctionDemo;
