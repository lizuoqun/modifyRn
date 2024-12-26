import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Flex from './src/study/Flex.tsx';
import FunctionDemo from './src/study/demo.tsx';
import GuestNumber from './src/study/GuestNumber.tsx';

export default class AppInit extends Component {
  render() {
    return (
      <View>
        <Text>App Init tsx</Text>
        <Text>声明样式的三种方式</Text>
        <Text style={styles.textStyle}>App Init tsx</Text>
        <Text style={{fontSize: 30}}>font size</Text>
        <Text style={[{color: 'blue'}, {color: 'green'}]}>这是什么颜色？</Text>
        <Flex/>
        <FunctionDemo/>
        <GuestNumber/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
