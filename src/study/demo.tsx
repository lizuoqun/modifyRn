import {StyleSheet, Text} from 'react-native';
import React from 'react';
const FunctionDemo = () => {
  return  <Text style={styles.text}>this is a function component</Text>
};

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default FunctionDemo;